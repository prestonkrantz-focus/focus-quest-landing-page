
import React from 'react';
import { ShieldCheckIcon, AdjustmentsHorizontalIcon, BellAlertIcon } from './icons/FeatureIcons';

const steps = [
  {
    name: 'Access & Monitor',
    description: 'The app uses secure, user-approved permissions to monitor all incoming iOS Notification Center alerts and app activity in real-time.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Triage Logic (The Firewall)',
    description: 'Our proprietary algorithm uses your customized keyword filters (e.g., "DM," "Reply," "Urgent") to determine the notification\'s value. Low-value items are suppressed.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'High-Signal Delivery',
    description: 'Only verified high-signal notifications are pushed back through the iOS Center, ensuring your phone only notifies you when it absolutely matters.',
    icon: BellAlertIcon,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built on Integration, Powered by Intelligence.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We monitor, triage, and execute—all through your existing device settings.
          </p>
        </div>
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hyper-blue">
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900 text-lg">{step.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
