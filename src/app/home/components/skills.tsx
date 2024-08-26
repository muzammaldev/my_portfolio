import React from "react";

type Props = {};

const Skils = (props: Props) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg container  mx-auto max-w-screen-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Frontend</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Material-UI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Backend</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>NestJS</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Database</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Version Control
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Authentication
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>JWT</li>
            <li>OAuth</li>
            <li>Passport.js</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            WebSockets
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Socket.IO</li>
            <li>WebSocket Gateway (NestJS)</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">APIs</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>API design and integration</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Problem-solving</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skils;
