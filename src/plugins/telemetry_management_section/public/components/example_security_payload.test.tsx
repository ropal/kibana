/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import React from 'react';
import { shallowWithIntl } from '@kbn/test/jest';
import ExampleSecurityPayload from './example_security_payload';

describe('example security payload', () => {
  it('renders as expected', () => {
    expect(shallowWithIntl(<ExampleSecurityPayload />)).toMatchSnapshot();
  });
});
