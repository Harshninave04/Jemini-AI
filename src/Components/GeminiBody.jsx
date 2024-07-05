import React from 'react';

const GeminiBody = () => {
  return (
    <>
      <div className="flex flex-col gap-5  p-16 ml-28 mt-6">
        <div className="text-5xl font-semibold">
          <h1>Hello, Harsh</h1>
          <h1 className="text-softTextColor ">How can I help you today?</h1>
        </div>
        <div className="flex items-center mt-10">
          <div className="max-w-80">
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-md object-cover"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-gray-500">$240,000</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </dl>
              </div>
            </a>
          </div>
          <div className="max-w-80">
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-md object-cover"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-gray-500">$240,000</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </dl>
              </div>
            </a>
          </div>
          <div className="max-w-80">
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-md object-cover"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-gray-500">$240,000</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </dl>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiBody;
