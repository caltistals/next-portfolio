import React from "react";

const InternSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h1 className="mb-8 text-4xl font-bold text-center">Intern</h1>
      <ol className="space-y-4">
        <li className="flex gap-4">
          {/* fenrir */}
          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-lg">フェンリル株式会社</dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-sm text-gray-400">ウェブエンジニアコース</dd>
            <dd className="ml-auto text-sm text-gray-400">
              <time dateTime="2022-08-22">2022/09/05</time>
              <span> - </span>
              <time dateTime="2022-09-02">2022/09/09</time>
            </dd>
          </dl>
        </li>
        {/* team-lab */}
        <li className="flex gap-4">
          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-lg">チームラボ株式会社</dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-sm text-gray-400">Webアプリエンジニア</dd>
            <dd className="ml-auto text-sm text-gray-400">
              <time dateTime="2022-08-22">2022/08/22</time>
              <span> - </span>
              <time dateTime="2022-09-02">2022/09/02</time>
            </dd>
          </dl>
        </li>
      </ol>
    </section>
  );
};

export default InternSection;
