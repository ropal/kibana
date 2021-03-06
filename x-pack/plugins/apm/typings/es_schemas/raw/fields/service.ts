/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export interface Service {
  name: string;
  environment?: string;
  framework?: {
    name: string;
    version?: string;
  };
  node?: {
    name?: string;
  };
  runtime?: {
    name: string;
    version: string;
  };
  language?: {
    name: string;
    version?: string;
  };
  version?: string;
}
