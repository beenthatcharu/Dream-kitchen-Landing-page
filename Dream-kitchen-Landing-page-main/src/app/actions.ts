'use server';

import { z } from 'zod';
import axios from 'axios';

const partialConsultationSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const fullConsultationSchema = partialConsultationSchema.extend({
  city: z.string(),
  requirement: z.enum([
    'Kitchens',
    'Living Rooms',
    'Bedrooms',
    'Wardrobes',
    'Bathrooms',
    'Study Areas',
  ]),
});

async function createOrUpdateHubspotContact(
  email: string,
  properties: Record<string, any>
) {
  const hubspotAccessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!hubspotAccessToken) {
    console.error('HubSpot access token not configured.');
    return {
      success: false,
      message: 'Integration error: HubSpot is not configured.',
    };
  }

  const [firstName, ...lastNameParts] = properties.fullName?.split(' ') || [];
  const lastName = lastNameParts.join(' ');

  const hubspotProperties: Record<string, any> = {
    email,
    firstname: firstName,
    lastname: lastName,
    phone: properties.phone,
    lifecyclestage: 'lead',
  };

  if (properties.city) {
    hubspotProperties.city = properties.city;
  }
  if (properties.requirement) {
    hubspotProperties.what_are_you_looking_for_ = properties.requirement
      .toLowerCase()
      .replace(/ /g, '_');
  }
  
  const endpoint = `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${encodeURIComponent(email)}/`;

  try {
    const response = await axios.post(
      endpoint,
      { properties: Object.entries(hubspotProperties).map(([key, value]) => ({ property: key, value })) },
      {
        headers: {
          Authorization: `Bearer ${hubspotAccessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('HubSpot contact created/updated:', response.data);
    return { success: true, hubspotVid: response.data.vid };
  } catch (error: any) {
    console.error(
      'HubSpot create/update error:',
      error.response?.data || error.message
    );
    return {
      success: false,
      message: 'Could not save contact to HubSpot.',
    };
  }
}

export async function handlePartialConsultation(values: {
  fullName: string;
  email: string;
  phone: string;
}) {
  const parsed = partialConsultationSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  
  console.log('Partial consultation request:', parsed.data);
  
  return createOrUpdateHubspotContact(parsed.data.email, parsed.data);
}

export async function handleFullConsultation(values: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  requirement:
    | 'Kitchens'
    | 'Living Rooms'
    | 'Bedrooms'
    | 'Wardrobes'
    | 'Bathrooms'
    | 'Study Areas';
}) {
  const parsed = fullConsultationSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  console.log('Full consultation request:', parsed.data);

  return createOrUpdateHubspotContact(parsed.data.email, parsed.data);
}
