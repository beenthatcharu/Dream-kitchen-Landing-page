'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { handlePartialConsultation, handleFullConsultation } from '@/app/actions';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits.'),
  city: z.string().min(2, 'City must be at least 2 characters.'),
  requirement: z.enum([
    'Kitchens',
    'Living Rooms',
    'Bedrooms',
    'Wardrobes',
    'Bathrooms',
    'Study Areas',
  ]),
});

const requirementOptions = [
  'Kitchens',
  'Living Rooms',
  'Bedrooms',
  'Wardrobes',
  'Bathrooms',
  'Study Areas',
] as const;

export function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [isStep1Submitting, setIsStep1Submitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      city: '',
    },
  });

  async function processFinalForm(values: z.infer<typeof formSchema>) {
    const result = await handleFullConsultation(values);

    if (result.success) {
      router.push('/thank-you');
    } else {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: result.message || 'Could not process your request.',
      });
    }
  }

  const nextStep = async () => {
    const fieldsToValidate = ['fullName', 'email', 'phone'];
    const isValid = await form.trigger(
      fieldsToValidate as (keyof z.infer<typeof formSchema>)[]
    );
    if (isValid) {
      setIsStep1Submitting(true);
      const step1Data = form.getValues();
      const result = await handlePartialConsultation({
        fullName: step1Data.fullName,
        email: step1Data.email,
        phone: step1Data.phone,
      });

      setIsStep1Submitting(false);

      if (result.success) {
        setStep(2);
      } else {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: result.message || 'Could not save your progress.',
        });
      }
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(processFinalForm)}
        className="space-y-4 overflow-hidden relative"
      >
        <h3 className="text-xl font-headline font-semibold text-white">
         Book Your Free Consultation

        </h3>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-white/80">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Name"
                        {...field}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-white/80">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        {...field}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-white/80">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        {...field}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                onClick={nextStep}
                className="w-full"
                size="lg"
                disabled={isStep1Submitting}
              >
                {isStep1Submitting ? 'SAVING...' : 'NEXT'}
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-white/80">City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your city name"
                        {...field}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requirement"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-white/80">
                      Looking For
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/50">
                          <SelectValue placeholder="Select a requirement" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {requirementOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  BACK
                </Button>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'SENDING...' : 'GET STARTED'}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Form>
  );
}
