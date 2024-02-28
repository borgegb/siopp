import { format } from "date-fns";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { CalendarIcon, Download, Upload } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/lib/form-schema";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

interface SubscriptionOption {
  id: string;
  name: string;
  description?: string;
  price?: string;
  price_original?: string;
  download?: string;
  upload?: string;
}

interface CustomerFormProps {
  onFormSubmit: (formData: z.infer<typeof formSchema>) => void;
  subscriptionOptions: SubscriptionOption[];
}

export default function CustomerForm({
  onFormSubmit,
  subscriptionOptions,
}: CustomerFormProps) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      subscription: "",
      lastDayOfService: undefined,
      termsOfAgreement: false,
      download: "",
      upload: "",
      // Set default values for other fields as needed
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onFormSubmit(values);
  }

  // Inside your CustomerForm component
  const [selectedSubscription, setSelectedSubscription] = useState<
    string | null
  >(null);

  // Function to handle subscription selection
  const handleSelectSubscription = (id: string) => {
    const subscriptionIdAsString = String(id);
    // Update the form value directly
    form.setValue("subscription", subscriptionIdAsString, {
      shouldValidate: true,
    });
    // Update local state
    setSelectedSubscription(subscriptionIdAsString);
  };

  useEffect(() => {
    console.log("Selected subscription changed:", selectedSubscription);
  }, [selectedSubscription]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full md:max-w-4xl lg:max-w-5xl">
        <CardHeader>
          <CardTitle>Registrer og velg ønsket Abonnement</CardTitle>
          <CardDescription>
            Fyll ut skjemaet for å mota kampanjepris på ønsket abonnement.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="space-y-4">
              {/* Customer Name */}
              <FormField
                control={form.control}
                name="first_name"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel htmlFor="first-name">Fornavn</FormLabel>
                    <FormControl>
                      <Input
                        id="first-name"
                        placeholder="Skriv inn fornavn"
                        {...field}
                      />
                    </FormControl>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel htmlFor="last-name">Etternavn</FormLabel>
                    <FormControl>
                      <Input
                        id="last-name"
                        placeholder="Skriv inn etternavn"
                        {...field}
                      />
                    </FormControl>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">E-post</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Skriv inn e-post"
                        {...field}
                      />
                    </FormControl>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Skriv inn telefonnummer" />
                    </FormControl>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel htmlFor="address">Adresse</FormLabel>
                    <FormControl>
                      <Input
                        id="address"
                        placeholder="Skriv inn adresse"
                        {...field}
                      />
                    </FormControl>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />

              {/* Last Day of Service */}
              <FormField
                control={form.control}
                name="lastDayOfService"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Utløpsdata for abonement</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className="w-full justify-between"
                          >
                            {field.value
                              ? format(new Date(field.value), "PPP")
                              : "Velg en dato"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) => {
                            // Ensure the date is in the correct format or converted to a Date object
                            form.setValue("lastDayOfService", date as any);
                          }}
                          // Add any necessary disabled date logic here
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Velg den siste dagen ditt gamle abonnement er
                      tilgjengelig. Har du ikke dato, la feltet stå tomt.
                    </FormDescription>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />

              {/* Subscription Selection */}
              <FormField
                control={form.control}
                name="subscription"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel>Abonnement</FormLabel>

                    <FormControl>
                      <div className="flex flex-col gap-4">
                        {subscriptionOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm cursor-pointer ${
                              selectedSubscription === String(option.id)
                                ? "border-blue-500 bg-blue-100" // Apply blue border and background if selected
                                : "border-gray-300 hover:bg-gray-100" // Default styles
                            }`}
                            onClick={() => {
                              console.log("Selecting subscription:", option.id); // Debugging line
                              handleSelectSubscription(option.id);
                              console.log(selectedSubscription); // Verify state update
                            }}
                          >
                            <div className="flex-1 text-left">
                              <div className="font-bold text-sm">
                                {option.name}
                              </div>
                              <div className="text-sm">
                                {option.description}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 space-x-2">
                                <Download className="h-4 w-4" />{" "}
                                <span>{option.download} Mbps</span>
                                <Upload className="h-4 w-4" />{" "}
                                <span>{option.upload} Mbps</span>
                              </div>
                            </div>
                            <div className="flex-initial text-right">
                              <div className="text-2xl font-semibold">
                                {option.price},-
                                <span className="text-sm font-medium ml-auto shrink-0">
                                  /md.
                                </span>
                              </div>
                              {option.price_original && (
                                <div className="text-sm text-gray-500 line-through">
                                  {option.price_original},-/md.
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="termsOfAgreement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Godta vilkår og betingelser</FormLabel>
                        <FormDescription>
                          Du godtar våre vilkår for tjenesten og
                          <Link href="/examples/forms">
                            {" "}
                            personvernreglene{" "}
                          </Link>
                          vår.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="ml-auto w-full" size={"lg"}>
                Bekreft bestilling
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
