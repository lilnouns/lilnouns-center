import {ExclamationTriangleIcon} from '@heroicons/react/24/solid';

interface AlertWarningProps {
  text: string;
}

export default function AlertWarning({ text }: AlertWarningProps) {
  return (
    <div className="rounded-md bg-yellow-50 p-4 mt-3">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Attention needed
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}