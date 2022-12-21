import React from 'react';

const features = [
  { name: '', description: '' },
  {
    name: '',
    description: '',
  },
  { name: '', description: '"' },
  { name: '', description: '' },
  { name: '', description: '' },
  {
    name: '',
    description: '',
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ManMan's Kitchen
          </h2>
          <p className="mt-4 text-gray-500">
            Let the world be able to get their taste buds cured by manman's
            Production LLC #soulfoodkitchen.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Burger"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://media.istockphoto.com/id/1366953203/photo/asian-style-barbecue-chicken-drumsticks-and-wings.jpg?b=1&s=170667a&w=0&k=20&c=rmKPeXOENMDI5xwzoEAzyBujqihLAV1u3YbvX-Pq37I="
            alt="Chicken Wings"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Fries"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="dessert"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
