import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "react-router";
function Payments() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-black text-black  flex w-full items-center dark:bg-gray-400 justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Pay Oedor
          </Button>
        </DialogTrigger>
        <Form method="POST">
          <DialogContent className="sm:max-w-[525px]  dark:bg-gray-900">
            <DialogHeader>
              <DialogTitle>Upgrade your subscription</DialogTitle>
              <DialogDescription>
                You are currently on the free plan. Upgrade to the pro plan to
                get access to all features.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex flex-col gap-4">
                <div data-slot="card-content" className="px-6 dark:bg-gray-900">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3 md:flex-row">
                      <div className="flex flex-1 flex-col gap-2">
                        <label
                          data-slot="label"
                          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                          for="name"
                        >
                          Name
                        </label>
                        <input
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                          id="name"
                          placeholder="Evil Rabbit"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2">
                        <label
                          data-slot="label"
                          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                          id="email"
                          placeholder="example@acme.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        data-slot="label"
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                        for="card-number"
                      >
                        Card Number
                      </label>
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-[1fr_80px_60px]">
                        <input
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive col-span-2 md:col-span-1"
                          id="card-number"
                          placeholder="1234 1234 1234 1234"
                        />
                        <input
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                          id="card-number-expiry"
                          placeholder="MM/YY"
                        />
                        <input
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                          id="card-number-cvc"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    <fieldset className="flex flex-col gap-3">
                      <legend className="text-sm font-medium">Plan</legend>
                      <p className="text-muted-foreground text-sm">
                        Select the plan that best fits your needs.
                      </p>
                      <div
                        role="radiogroup"
                        aria-required="false"
                        dir="ltr"
                        data-slot="radio-group"
                        className="grid gap-3 md:grid-cols-2"
                        tabindex="0"
                      >
                        <label
                          data-slot="label"
                          className="text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-input/20 flex items-start gap-3 rounded-lg border p-3"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="true"
                            data-state="checked"
                            value="starter"
                            data-slot="radio-group-item"
                            className="border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary"
                            id="Starter Plan"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span
                              data-state="checked"
                              data-slot="radio-group-indicator"
                              className="relative flex items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-circle fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                            </span>
                          </button>
                          <div className="grid gap-1 font-normal">
                            <div className="font-medium">Starter Plan</div>
                            <div className="text-muted-foreground text-xs leading-snug text-balance">
                              Perfect for small businesses.
                            </div>
                          </div>
                        </label>
                        <label
                          data-slot="label"
                          className="text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-input/20 flex items-start gap-3 rounded-lg border p-3"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="pro"
                            data-slot="radio-group-item"
                            className="border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary"
                            id="Pro Plan"
                            tabindex="-1"
                            data-radix-collection-item=""
                          ></button>
                          <div className="grid gap-1 font-normal">
                            <div className="font-medium">Pro Plan</div>
                            <div className="text-muted-foreground text-xs leading-snug text-balance">
                              More features and storage.
                            </div>
                          </div>
                        </label>
                      </div>
                    </fieldset>
                    <div className="flex flex-col gap-2">
                      <label
                        data-slot="label"
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                        for="notes"
                      >
                        Notes
                      </label>
                      <textarea
                        data-slot="textarea"
                        className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="notes"
                        placeholder="Enter notes"
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          data-slot="checkbox"
                          className="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                          id="terms"
                        ></button>
                        <label
                          data-slot="label"
                          className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-normal"
                          for="terms"
                        >
                          I agree to the terms and conditions
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-slot="checkbox"
                          className="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                          id="newsletter"
                        >
                          <span
                            data-state="checked"
                            data-slot="checkbox-indicator"
                            className="flex items-center justify-center text-current transition-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-check size-3.5"
                            >
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </button>
                        <label
                          data-slot="label"
                          className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-normal"
                          for="newsletter"
                        >
                          Allow us to send you emails
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Upgrade Plan</Button>
            </DialogFooter>
          </DialogContent>
        </Form>
      </Dialog>
    </>
  );
}

export default Payments;
