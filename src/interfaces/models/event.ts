import { StackTrace } from '@interfaces/models/stackTrace';
import { Types } from 'mongoose';

type AnyStringObject = {
  [K in string]: string;
};

export interface Event {
  _id?: string | Types.ObjectId;
  issueId?: string | Types.ObjectId;
  release?: string;
  environment?: string;
  timeStamp: Date;
  createdBy: {
    ipAdress?: string;
  };
  os?: {
    version: string;
    name: string;
  };
  browser?: {
    version: string;
    name: string;
  };
  sdk: {
    version: string;
    name: string;
  };
  url?: string;
  type?: string; // error.name
  value?: string; // error.message
  stacktrace?: StackTrace[]; // error.stack
  contexts?: AnyStringObject;
  version?: string;
  platform?: string;
  serverName?: string;
  transaction?: string;
  userIp?: string;
  message?: string;
  level?: string;
  errorContexts: string[][];
}