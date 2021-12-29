This is a repro repo.

We define a test parametizer/helper `parameterizeTestCase` and call it in various other test files to get shared behavior.

(In reality the actual `parameterizeTestCase` has a much more extensive implementation to get templated test cases for API testing.)

If you run this sample, you will see the following output:

## Actual

```
$ npm run test:e2e

> plawyright-parameterized-tests-repro@1.0.0 test:e2e
> playwright test


Running 3 tests using 3 workers

  ✓  helpers/index.ts:4:3 › a (6ms)
  ✓  helpers/index.ts:4:3 › suite › b-0 (5ms)
[ 'e2e/a.spec.ts', 'a' ]
  ✓  helpers/index.ts:4:3 › suite › b-1 (5ms)
[ 'e2e/b.spec.ts', 'suite', 'b-0' ]
[ 'e2e/b.spec.ts', 'suite', 'b-1' ]
```

## Expected

```
$ npm run test:e2e

> plawyright-parameterized-tests-repro@1.0.0 test:e2e
> playwright test


Running 3 tests using 3 workers

  ✓  e2e/a.spec.ts:?:? › a (6ms)
  ✓  e2e/b.spec.ts:?:? › suite › b-0 (5ms)
[ 'e2e/a.spec.ts', 'a' ]
  ✓  e2e/b.spec.ts:?:? › suite › b-1 (5ms)
[ 'e2e/b.spec.ts', 'suite', 'b-0' ]
[ 'e2e/b.spec.ts', 'suite', 'b-1' ]
```

I expected the reporter to not reference `helpers/index.ts` at all.

NB: The `testInfo.titlePath` looks correct in the actual output, and it looks like the runner chose to run `a.spec.ts` and `b.spec.ts` in parallel, so even though the reporter says it's all part of `helpers/index.ts`, the scheduler and `testInfo` appear to be correct.
