
import React from 'react';
import { EyeSlashIcon, DocumentTextIcon, ClockIcon } from './icons/FeatureIcons';

const features = [
  {
    name: 'Zero-Feed Browser',
    description: 'Launch web versions of social platforms (X, YouTube, etc.) inside a HyperFocus container that automatically strips out suggested content and infinite feeds.',
    icon: EyeSlashIcon,
  },
  {
    name: 'Notification Audit Log',
    description: 'A transparency feature that shows you every single notification HyperFocus successfully suppressed, proving the system is working and you didn\'t miss anything important.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Focus Mode Automation',
    description: 'Use smart timers and schedules to automatically activate and deactivate the firewall based on your workday or class schedule.',
    icon: ClockIcon,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-hyper-gray py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Features That Return Control.
          </h2>
        </div>
        <div className="mt-20 grid max-w-lg gap-8 mx-auto lg:grid-cols-3 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="inline-block p-3 rounded-md bg-hyper-blue">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
