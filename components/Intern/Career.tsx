import { CareerProps } from "./Career.type";

const Career = ({ companyName, role, fromDate, untilDate }: CareerProps) => {
  return (
    <li className="flex gap-4">
      <dl className="flex flex-wrap flex-auto gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="flex-none w-full text-lg">{companyName}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-sm text-gray-400">{role}</dd>
        <dd className="ml-auto text-sm text-gray-400">
          <time dateTime={fromDate}>{fromDate}</time>
          <span> - </span>
          <time dateTime={untilDate}>{untilDate}</time>
        </dd>
      </dl>
    </li>
  );
};

export default Career;
