import { find } from 'lodash'
export default courseSlug =>
  find(
    [
      {
        slug: 'react-navigation-for-native-mobile-applications',
        dependencies: {
          react: '2.0.0 - ^6.0.0',
          'react-native': '^0.55.0',
          'react-navigation': '1.5 - 2',
        },
        reviews: [
          {
            performedOn: '2018-06-26',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react-navigation',
                title:
                  '`addNavigationHelpers` was removed, just pass an object to `navigation` prop',
                details:
                  'External API updated for React Navigation, principle behind lessons remains valid',
              },
              {
                type: 'major issue',
                dependency: 'react-navigation',
                title:
                  '`TabNavigator` was renamed to `createBottomTabNavigator`',
                details:
                  'External API updated for React Navigation, principle behind lessons remains valid',
              },
              {
                type: 'major issue',
                dependency: 'react-navigation',
                title: '`StackNavigator` was renamed to `createStackNavigator`',
                details:
                  'External API updated for React Navigation, principle behind lessons remains valid',
              },
            ],
          },
        ],
      },
      {
        slug: 'rxjs-beyond-the-basics-creating-observables-from-scratch',
        dependencies: {
          rxjs: '^5.0.0',
        },
        reviews: [
          {
            performedOn: '2017-08-28',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'step-by-step-async-javascript-with-rxjs',
        dependencies: {
          rxjs: '^5.0.0',
        },
        reviews: [
          {
            performedOn: '2017-08-28',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'build-redux-style-applications-with-angular-rxjs-and-ngrx-store',
        dependencies: {
          angular: '2 - 6',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-07-18',
            performedBy: 186087,
            scopeOfReview: 'Full course review',
            notes: [
              {
                type: 'minor issue',
                dependency: 'codesandbox',
                title: 'polyfills.ts file needed for online embed',
                details:
                  'When using codesandbox for examples, a polyfills.ts file is necessary and imported that into the main.ts file',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
            ],
          },
        ],
      },
      {
        slug: 'rxjs-beyond-the-basics-operators-in-depth',
        dependencies: {
          rxjs: '^5.0.0',
        },
        reviews: [
          {
            performedOn: '2017-09-15',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'introduction-to-reactive-programming',
        dependencies: {
          rxjs: '4 - 5',
        },
        reviews: [
          {
            performedOn: '2017-04-19',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  '`buffer` has been split into: `buffer`, `bufferWhen`, and `bufferToggle`',
                details:
                  'To reduce polymorphism and get better performance out of operators, some operators have been split into more than one operator',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  '`debounce` has been split into: `debounce` and `debounceTime`',
                details:
                  'To reduce polymorphism and get better performance out of operators, some operators have been split into more than one operator',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'flatMap is now an alias for mergeMap but will work just the same.',
                details:
                  'To reduce polymorphism and get better performance out of operators, some operators have been split into more than one operator',
              },
            ],
          },
        ],
      },
      {
        slug: 'rxjs-subjects-and-multicasting-operators',
        dependencies: {
          rxjs: '^5.0.0',
        },
        reviews: [
          {
            performedOn: '2017-08-28',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'use-higher-order-observables-in-rxjs-effectively',
        dependencies: {
          rxjs: '^5.0.0',
        },
        reviews: [
          {
            performedOn: '2017-08-25',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'save-time-avoiding-common-mistakes-using-rxjs',
        dependencies: {
          rxjs: '^5.0.0',
        },
        reviews: [
          {
            performedOn: '2017-08-25',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'up-and-running-with-redux-observable',
        dependencies: {
          redux: '3 - 4',
          rxjs: '5 - 6',
          react: '15 - 16',
        },
        reviews: [
          {
            performedOn: '2017-08-25',
            performedBy: 264612,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  '`rxjs-compat` was installed for backwards compatibility between rxjs v6 to v5.',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'With the update to 6.2, a lot of operators had to be imported directly',
                description:
                  'The list of these operators are: debounceTime, filter, switchMap, observable/dom/ajax, delay, map, catch, observable/of, observable/throw, observable/concat, and takeUntil',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                lessons: [
                  'react-testing-the-output-of-epics',
                  'redux-mocking-an-ajax-request-when-testing-epics',
                  'redux-use-tests-to-verify-updates-to-the-redux-store',
                ],
                title:
                  'toArray had to be imported separately, `import "rxjs/add/operator/toArray"`',
              },
            ],
          },
        ],
      },
      {
        slug: 'build-react-components-from-streams-with-rxjs-and-recompose',
        dependencies: {
          rxjs: '^5.0.0',
          react: '^16.0.0',
        },
      },
      {
        slug: 'build-async-vue-js-apps-with-rxjs',
        dependencies: {
          rxjs: '^5.0.0',
          vue: '^2.0.0',
        },
      },
      {
        slug: 'react-native-fundamentals',
        dependencies: {
          react: '0.14 - 16',
          'react-native': '0.3 - 0.53',
        },
        reviews: [
          {
            performedOn: '2018-02-08',
            performedBy: 248653,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                dependency: 'react',
                type: 'major issue',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
            ],
          },
          {
            dependency: 'react-native',
            performedOn: '2018-02-08',
            performedBy: 248653,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                title:
                  '0.46 in React Native breaks the build configuration in Xcode',
              },
            ],
          },
          {
            performedOn: '2017-06-25',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                dependency: 'react-native',
                type: 'major issue',
                title:
                  'react-native-xcode.sh now lives in a different location',
                details:
                  'https://github.com/facebook/react-native/releases/tag/v0.46.4',
              },
            ],
          },
        ],
      },
      {
        slug: 'react-flux-architecture-es6',
        dependencies: {
          react: '0.14 - 16',
          flux: '2 - 3',
          'react-router': '1 - 3',
        },
        reviews: [
          {
            performedOn: '',
            performedBy: 186087,
            dependency: 'react',
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
            ],
          },
          {
            performedOn: '2018-05-18',
            performedBy: 264612,
            dependency: 'react-router',
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                title: 'import change',
                lessons: [
                  'react-flux-architecture-routing-with-react-router-1-0',
                  'react-flux-architecture-component-wrap-up',
                  'react-flux-architecture-dumb-stores',
                ],
                details:
                  "`browserHistory` must be imported and used on `<Router>` to avoid `Cannot read property  'location' of undefined`",
              },
            ],
          },
        ],
      },
      {
        slug: 'getting-started-with-react-router-v3',
        dependencies: {
          react: '0.14 - 16',
          'react-router': '^3.0.0',
        },
        reviews: [
          {
            performedOn: '2018-04-05',
            performedBy: 231890,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
            ],
          },
        ],
      },
      {
        slug: 'animate-react-native-ui-elements',
        dependencies: {
          react: '^15.0.0',
          'react-native': '0.35 - 0.39',
        },
      },
      {
        slug: 'build-a-react-native-todo-application',
        dependencies: {
          react: '^15.0.0',
          'react-native': '0.35 - 0.37',
        },
      },
      {
        slug: 'build-your-first-production-quality-react-app',
        dependencies: {
          react: '15 - 16',
        },
        reviews: [
          {
            performedOn: '2018-04-05',
            performedBy: 264612,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react',
                lessons: [
                  'react-validate-component-input-with-prop-types-in-react',
                  'react-add-data-to-a-list-without-mutations',
                  'react-update-react-application-state-from-form-input',
                  'react-prevent-empty-form-values-with-conditional-submit-handlers',
                  'react-use-es2016-property-initializer-syntax-in-es6-classes',
                  'react-update-data-in-a-list-without-mutations',
                  'react-pass-data-to-event-handlers-with-partial-function-application',
                  'react-create-a-pipe-function-to-enable-function-composition',
                  'react-remove-items-from-a-list-without-mutations',
                  'react-build-a-link-component-to-navigate-to-routes-in-react',
                  'react-use-react-context-to-manage-application-state-through-routes',
                  'react-filter-data-on-property-values-in-react',
                  'react-keep-react-application-state-in-sync-with-browser-history',
                  'react-load-data-for-react-from-a-server-with-fetch',
                  'react-save-data-to-the-server-with-fetch-in-react',
                  'react-show-temporary-messages-in-a-react-application',
                  'react-update-data-on-the-server-with-fetch-in-react',
                  'react-delete-data-on-the-server-with-fetch-in-react',
                ],
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
              {
                type: 'major issue',
                dependency: 'react',
                title: 'Router prop change',
                details:
                  '`browserHistory` must be imported and used on `<Router>`',
              },
            ],
          },
        ],
      },
      {
        slug: 'up-and-running-with-preact',
        dependencies: {
          preact: '7 - 8',
          'react-router': '^4.0.0',
          redux: '^3.0.0',
        },
      },
      {
        slug:
          'higher-order-components-with-functional-patterns-using-recompose',
        dependencies: {
          react: '^16.0.0',
        },
        reviews: [
          {
            performedOn: '2018-04-29',
            performedBy: 264612,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
            ],
          },
        ],
      },
      {
        slug: 'build-virtual-reality-experiences-using-react-vr',
        dependencies: {
          react: '15 - 16',
          'react-vr': '1 - 2',
        },
        reviews: [
          {
            performedOn: '2018-08-04',
            performedBy: 248653,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
              {
                type: 'major issue',
                dependency: 'react',
                title: 'Importing `blacklist` from `react-native` had changed',
                details:
                  'Instead of having blacklist imported from node_modules, it is now imported from metro',
              },
            ],
          },
        ],
      },
      {
        slug: 'add-internationalization-i18n-to-a-react-app-using-react-intl',
        dependencies: {
          react: '15 - 16',
        },
        reviews: [
          {
            performedOn: '2018-04-18',
            performedBy: 264612,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
            ],
          },
        ],
      },
      {
        slug: 'up-and-running-with-redux-observable',
        dependencies: {
          react: '15 - 16',
          redux: '3 - 4',
        },
        reviews: [
          {
            performedOn: '2018-05-28',
            performedBy: 264612,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'react',
                title:
                  'React v15.5.0 PropTypes was extracted into its own package',
                details:
                  'Documentation on that: https://reactjs.org/blog/2017/04/07/react-v15.5.0.html',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
              {
                type: 'minor issue',
                dependency: 'rxjs',
                title:
                  'all lessons had to have specific commands in rxjs be imported individually from `operator`',
              },
            ],
          },
        ],
      },
      {
        slug:
          'build-a-server-rendered-code-split-app-in-react-with-react-universal-component',
        dependencies: {
          express: '^4.0.0',
          react: '^16.0.0',
        },
      },
      {
        slug: 'build-a-react-app-with-redux',
        dependencies: {
          react: '15 - 16',
          redux: '3 - 4',
        },
      },
      {
        slug: 'build-react-components-from-streams-with-rxjs-and-recompose',
        dependencies: {
          react: '^16.0.0',
          rxjs: '^5.0.0',
        },
      },
      {
        slug: 'leverage-new-features-of-react-16',
        dependencies: {
          react: '^16.0.0',
        },
      },
      {
        slug: 'add-routing-to-react-apps-using-react-router-v4',
        dependencies: {
          react: '15 - 16',
          'react-router': '^4.0.0',
        },
      },
      {
        slug: 'build-a-server-rendered-reactjs-application-with-next-js',
        dependencies: {
          react: '^16.0.0',
          next: '^4.0.0',
        },
      },
      {
        slug: 'build-a-blog-with-react-and-markdown-using-gatsby',
        dependencies: {
          gatsby: '^2.0.0',
        },
      },
      {
        slug: 'use-typescript-to-develop-react-applications',
        dependencies: {
          react: '^16.0.0',
          typescript: '2.5',
        },
      },
      {
        slug: 'optimistic-ui-updates-in-react',
        dependencies: {
          react: '^16.0.0',
        },
      },
      {
        slug: 'async-react-with-redux-saga',
        dependencies: {
          react: '^16.0.0',
          redux: '3 - 4',
          'redux-saga': '0.16.0',
        },
        reviews: [
          {
            performedOn: '2018-08-21',
            performedBy: 264612,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'redux-saga',
                title: '`import { takeLastest } from redux-saga` is deprecated',
                details:
                  'If you want to import `takeLatest`, you much use `import {takeLatest } from redux-saga/effects`',
              },
            ],
          },
        ],
      },
      {
        slug: 'manage-react-form-state-with-redux-form',
        dependencies: {
          react: '^16.0.0',
          redux: '^3.0.0',
        },
      },
      {
        slug: 'test-react-components-with-enzyme-and-jest',
        dependencies: {
          react: '^16.0.0',
          enzyme: '^3.0.0',
          redux: '^3.0.0',
        },
      },
      {
        slug: 'building-apps-with-ionic-2',
        dependencies: {
          angular: '2 - 6',
          'ionic-angular': '2 - 3',
        },
        reviews: [
          {
            performedOn: '2018-08-09',
            performedBy: 186087,
            scopeOfReview: 'Full course review',
            notes: [
              {
                type: 'major issue',
                dependency: 'ionic',
                lessons: [
                  'angular-build-your-first-page-component-with-ionic-2',
                  'angular-use-sliding-gestures-to-reorder-an-ionic-2-list',
                  'angular-use-the-ionic-cli-to-generate-angular-2-mobile-components',
                  'angular-fetch-data-from-an-api-using-angular-2-http-module',
                  'angular-lazy-load-data-with-ionic-2',
                  'angular-navigate-between-mobile-screens-with-the-ionic-2-navcontroller',
                  'angular-preview-an-angular-2-mobile-app-with-ionic-lab',
                  'angular-create-angular-2-mobile-card-based-layouts-with-ionic-2',
                  'angular-use-ionic-2-navcontroller-to-manipulate-app-history',
                  'angular-create-an-overlay-component-with-the-ionic-2-overlay-api',
                  'angular-create-a-native-mobile-side-menu-layout-in-ionic-2',
                ],
                title: 'runtimeError `webpackJsonp is not defined`',
                details:
                  'Add in `<script src="build/vendor.js"></script>` in the index.html file',
              },
            ],
          },
        ],
      },
      {
        slug: 'angular-dependency-injection-di-explained',
        dependencies: {
          angular: '2 - 6',
          rxjs: '5 - 6',
        },
      },
      {
        slug: 'learn-the-basics-of-angular-forms',
        dependencies: {
          angular: '2 - 6',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-07-24',
            performedBy: 186087,
            scopeOfReview: 'Full course Review',
            notes: [
              {
                type: 'minor issue',
                dependency: 'no dependency',
                title: 'polyfills.ts file needed for online embed',
                details:
                  'When using codesandbox for examples, a polyfills.ts file is necessary and imported that into the main.ts file',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
            ],
          },
        ],
      },
      {
        slug: 'manage-ui-state-with-the-angular-router',
        dependencies: {
          angular: '2 - 4',
          rxjs: '^5.0.0',
        },
      },
      {
        slug: 'build-an-angular-instant-search-component',
        dependencies: {
          angular: '^2.0.0',
          rxjs: '^5.0.0',
        },
      },
      {
        slug: 'building-angular-components',
        dependencies: {
          angular: '2 - 6',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-07-24',
            performedBy: 186087,
            scopeOfReview: 'full course review',
            notes: [
              {
                type: 'major issue',
                dependency: 'angular',
                lessons: [
                  'angular-generate-and-render-angular-2-template-elements-in-a-component',
                  'angular-set-values-on-generated-angular-2-templates-with-template-context',
                ],
                title: '`template` has been changed to `ng-template`',
                details:
                  '`template` has been deprecated since version 4.0. use `ng-template` instead.',
              },
              {
                type: 'minor issue',
                dependency: 'codesandbox',
                title: 'polyfills.ts file needed for online embed',
                details:
                  'To be able to run this code in codesandbox.io, a polyfills.ts file is necessary.',
              },
            ],
          },
        ],
      },
      {
        slug: 'animate-angular-web-applications',
        dependencies: {
          angular: '2 - 4',
          rxjs: '5 - 6',
        },
      },
      {
        slug:
          'use-objective-c-swift-and-java-api-s-in-nativescript-for-angular-ios-and-android-apps',
        dependencies: {
          angular: '^2.0.0',
          rxjs: '^5.0.0',
          'nativescript-angular': '^1.0.0',
        },
      },
      {
        slug: 'understand-angular-directives-in-depth',
        dependencies: {
          angular: '^6.0.0',
        },
        reviews: [
          {
            performedOn: '2018-08-13',
            performedBy: 186087,
            scopeOfReview: 'full course review',
            notes: [
              {
                type: 'major issue',
                dependency: 'angular',
                lessons: [
                  'angular-use-template-elements-in-angular',
                  'angular-create-elements-from-template-elements-with-ngtemplateoutlet-in-angular',
                  'angular-create-a-template-storage-service-in-angular',
                ],
                title: '`template` has been changed to `ng-template`',
                details:
                  '`template` has been deprecated since version 4.0. use `ng-template` instead.',
              },
              {
                type: 'major issue',
                dependency: 'angular',
                lessons: [
                  'angular-create-elements-from-template-elements-with-ngtemplateoutlet-in-angular',
                ],
                title:
                  '`ngOutletContext` has been removed as it was deprecated since v4.',
                details:
                  'Use `ngTemplateOutletContext` instead of `ngOutletContext`.',
              },
              {
                type: 'minor issue',
                dependency: 'codesandbox',
                title: 'polyfills.ts file needed for online embed',
                details:
                  'To be able to run this code in codesandbox.io, a polyfills.ts file is necessary.',
              },
            ],
          },
        ],
      },
      {
        slug: 'start-learning-react',
        dependencies: {
          react: '0.14 - 16',
        },
      },
      {
        slug: 'react-testing-cookbook',
        dependencies: {
          react: '0.14 - 15',
          redux: '^3.0.0',
        },
      },
      {
        slug: 'building-react-applications-with-idiomatic-redux',
        dependencies: {
          react: '^15.0.0',
          redux: '^3.0.0',
        },
      },
      {
        slug: 'manage-complex-state-in-react-apps-with-mobx',
        dependencies: {
          mobx: '2 - 5',
          react: '15 - 16',
        },
        reviews: [
          {
            performedOn: '2018-07-17',
            performedBy: 248653,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                title: 'removed line- “useStrict(true);',
                details: 'The useStrict terminology is no longer recognized',
              },
              {
                type: 'major issue',
                title: 'Keys and values now return iterators',
                details:
                  'keys and values now return iterators, to return an array, use Array.from with the iterator https://github.com/mobxjs/mobx/issues/1488',
              },
            ],
          },
        ],
      },
      {
        slug: 'structure-angular-apps-with-angular-material-components',
        dependencies: {
          angular: '5 - 6',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-08-18',
            performedBy: 264612,
            scopeOfReview: 'Full course review',
            notes: [
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
            ],
          },
        ],
      },
      {
        slug: 'learn-http-in-angular',
        dependencies: {
          angular: '4 - 6',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-07-18',
            performedBy: 186087,
            scopeOfReview: 'Full course review',
            notes: [
              {
                type: 'minor issue',
                dependency: 'codesandbox',
                title: 'polyfills.ts file needed for online embed',
                details:
                  'When using codesandbox for examples, a polyfills.ts file is necessary and imported that into the main.ts file',
              },
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
            ],
          },
        ],
      },
      {
        slug: 'create-dynamic-forms-in-angular',
        dependencies: {
          angular: '^6.0.0',
          rxjs: '^6.0.0',
        },
      },
      {
        slug: 'create-dynamic-components-in-angular',
        dependencies: {
          angular: '5 - 6',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-05-17',
            performedBy: 186087,
            scopeOfReview: 'full course review',
            notes: [
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
            ],
          },
          {
            performedOn: '2018-11-23',
            performedBy: 352387,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'minor issue',
                dependency: '@angular/core',
                title: '6.0.0 -> set preserveWhitespaces to false by default',
                details:
                  "On lesson 12 This caused “Home Employees” to become “HomeEmployees”. In main.ts .bootstrapModule(AppModule, {preserveWhitespaces: true} was added to replicate the example's original configuration settings",
                documentation:
                  'https://github.com/angular/angular/blob/master/CHANGELOG.md#600-2018-05-03',
              },
            ],
          },
        ],
      },
      {
        slug: 'angular-service-injection-with-the-dependency-injector-di',
        dependencies: {
          angular: '5 - 7',
          rxjs: '5 - 6',
        },
        reviews: [
          {
            performedOn: '2018-05-15',
            performedBy: 186087,
            scopeOfReview: 'full course review',
            notes: [
              {
                type: 'major issue',
                dependency: 'rxjs',
                title:
                  'rxjs-compat needs to be used if you upgraded from v5 -> v6',
                details:
                  'rxjs-compat is now necessary to run rxjs applications with angular if the application is updated from v5 -> v6 [ReactiveX/rxjs#3764](https://github.com/ReactiveX/rxjs/issues/3764)',
              },
            ],
          },
          {
            performedOn: '2018-11-23',
            performedBy: 352387,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'minor issue',
                dependency: '@angular/core',
                title: '6.0.0 -> set preserveWhitespaces to false by default',
                details:
                  "On lesson 12 This caused “Home Employees” to become “HomeEmployees”. In main.ts .bootstrapModule(AppModule, {preserveWhitespaces: true} was added to replicate the example's original configuration settings",
                documentation:
                  'https://github.com/angular/angular/blob/master/CHANGELOG.md#600-2018-05-03',
              },
            ],
          },
        ],
      },
      {
        slug: 'manage-application-state-with-mobx-state-tree',
        dependencies: {
          react: '^16.0.0',
          mobx: '^3.0.0',
        },
      },
      {
        slug: 'beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd',
        dependencies: {
          react: '^16.0.0',
        },
      },
      {
        slug: 'getting-started-with-redux',
        dependencies: {
          react: '0.14 - 16',
          redux: '3 - 4',
        },
        reviews: [
          {
            performedOn: '2018-04-19',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug:
          'seo-friendly-progressive-web-applications-with-angular-universal',
        dependencies: {
          angular: '^6.0.0',
          rxjs: '^6.0.0',
        },
      },
      {
        slug: 'create-native-mobile-apps-with-nativescript-for-angular',
        dependencies: {
          angular: '^2.0.0',
          rxjs: '^5.0.0',
        },
      },
      {
        slug: 'get-started-with-angular',
        dependencies: {
          angular: '5 - 6',
          rxjs: '5 - 6',
        },
      },
      {
        slug: 'the-beginner-s-guide-to-react',
        dependencies: {
          react: '^16.0.0',
        },
      },
      {
        slug: 'build-basic-nativescript-app-templates',
        dependencies: {
          nativescript: '2 - 4',
        },
      },
      {
        slug: 'json-web-token-jwt-authentication-with-node-js-and-auth0',
        dependencies: {
          express: '^4.0.0',
        },
        reviews: [
          {
            performedOn: '2018-08-20',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                dependency: 'httpster',
                lessons: [
                  'express-connect-a-front-end-to-a-secure-api-using-jwts',
                  'express-authenticate-users-in-a-single-page-application-with-auth0',
                ],
                title: 'Running a third server to get lesson 8 and 9 working.',
                details:
                  'To run lesson 8 and 9, run `httpster index.html -p 5000` in the terminal to get the third server running.',
              },
            ],
          },
        ],
      },
      {
        slug: 'fully-connected-neural-networks-with-keras',
        dependencies: {
          python: '^3.0.0',
        },
      },
      {
        slug: 'advanced-angular-component-patterns',
        dependencies: {
          angular: '5 - 6',
        },
      },
      {
        slug:
          'create-smooth-performant-transitions-with-react-transition-group-v2',
        dependencies: {
          react: '^16.0.0',
        },
      },
      {
        slug: 'getting-started-with-angular-elements',
        dependencies: {
          angular: '^6.0.0',
        },
      },
      {
        slug: 'design-systems-with-react-and-typescript-in-storybook',
        dependencies: {
          react: '^16.0.0',
          'react-storybook': '^3.0.0',
        },
      },
      {
        slug: 'build-your-own-rxjs-pipeable-operators',
        dependencies: {
          rxjs: '^6.0.0',
        },
      },
      {
        slug: 'style-and-theme-ionic-applications',
        dependencies: {
          ionic: '^3.0.0',
        },
      },
      {
        slug: 'build-basic-nativescript-app-templates',
        dependencies: {
          nativescript: '^4.0.0',
        },
        reviews: [
          {
            performedOn: '2018-09-06',
            performedBy: 248653,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'functional-programming-concepts-in-purescript',
        dependencies: {
          purescript: '0.11.7 - ^0.12',
        },
        reviews: [
          {
            performedOn: '2018-11-02',
            performedBy: '352387',
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'minor issue',
                dependency: 'purescript',
                title: "'id' changed to 'identity'",
                details:
                  "With the update to purescript 4.0.0, 'id' was changed to 'identity'",
                documentation:
                  'https://github.com/purescript/purescript-prelude/issues/122',
              },
            ],
          },
        ],
      },
      {
        slug: 'build-a-graphql-server',
        dependencies: {
          graphql: '0.7 - 14',
        },
      },
      {
        slug: 'execute-npm-package-binaries-with-the-npx-package-runner',
        dependencies: {
          npm: '>=5.2.0',
        },
      },
      {
        slug:
          'scalable-offline-ready-graphql-applications-with-aws-appsync-react',
        dependencies: {
          graphql: '^14.0.0',
        },
      },
      {
        slug: 'react-context-for-state-management',
        dependencies: {
          react: '^16.6.0',
        },
      },
      {
        slug: 'simplify-react-apps-with-react-hooks',
        dependencies: {
          react: '^16.7.0-alpha',
        },
      },
      {
        slug: 'modern-javascript-tooling-with-react',
        dependencies: {
          'prop-types': '^15.6.2',
          react: '^16.6.1',
        },
      },
      {
        slug: 'progressive-web-apps-in-react-with-create-react-app',
        dependencies: {
          react: '^16.6.3',
        },
      },
      {
        slug: 'learn-angular-router-for-real-world-applications',
        dependencies: {
          angular: '~7.0.0',
          react: '~6.3.3',
          'core-js': '^2.5.4',
        },
      },
      {
        slug: 'build-a-desktop-application-with-electron',
        dependencies: {
          axios: '^0.18.0',
          electron: '^3.0.7',
          'electron-builder': '^20.31.2',
        },
        reviews: [
          {
            performedOn: '2018-11-02',
            performedBy: 186087,
            scopeOfReview: 'full course lesson review',
          },
        ],
      },
      {
        slug: 'build-an-angular-instant-search-component',
        dependencies: {
          angular: '2.0.0-rc.5 - ^7.0.3',
          rxjs: '5.0.0-beta.6 - ^6.3.3',
        },
        review: [
          {
            performedOn: '2018-11-13',
            performedBy: '352387',
            scopeOfReview: 'full course review',
          },
        ],
      },
      {
        slug: 'get-started-with-angular',
        dependencies: {
          angular: '4.1.1 - ^7.0.1',
          rxjs: '5.0.0 - ^6.3.3',
        },
        reviews: [
          {
            performedOn: '2018-10-30',
            performedBy: '264612',
            scopeOfReview: 'full course review',
          },
        ],
      },
      {
        slug: 'build-graphql-apis-with-aws-appsync',
        dependencies: {
          react: '^16.4.2',
        },
        reviews: [
          {
            performedOn: '2018-10-30',
            performedBy: '264612',
            scopeOfReview: 'full course review',
          },
        ],
      },
      {
        slug: 'advanced-angular-component-patterns',
        dependencies: {
          angular: '5.0.0 - ^7.0.2',
          rxjs: '5.5.2 - ^6.3.3',
        },
        reviews: [
          {
            performedOn: '2018-11-07',
            performedBy: '352387',
            scopeOfReview: 'full course review',
            notes: [
              {
                type: 'minor issue',
                dependency: '@angular/core',
                title: '6.0.0 -> set preserveWhitespaces to false by default',
                details:
                  "On lesson 4 This caused “Off Off” to become “OffOff”. In main.ts .bootstrapModule(AppModule, {preserveWhitespaces: true} was added to replicate the example's original configuration settings",
                documentation:
                  'https://github.com/angular/angular/blob/master/CHANGELOG.md#600-2018-05-03',
              },
            ],
          },
        ],
      },
      {
        slug: 'javascript-promises-in-depth',
        dependencies: {
          angular: '5.0.0 - ^7.0.2',
          rxjs: '5.5.2 - ^6.3.3',
        },
        reviews: [
          {
            performedOn: '2018-12-02',
            performedBy: '186087',
            scopeOfReview: 'full course review',
          },
        ],
      },
      {
        slug: 'use-dom-testing-library-to-test-any-js-framework',
        dependencies: {
          dojo: '^3.0.0',
          polymer: '3.0.5',
          angular: '1.7.4',
          aurelia: '1.3.0',
          backbone: '1.3.3',
          hyperapp: '1.2.9',
          jquery: '3.3.1',
          Knockout: '3.4.2',
          mithril: '1.1.6',
          preact: '8.3.1',
          react: '16.5.1',
          stimulus: '1.1.0',
          svelte: '2.13.4',
          vue: '2.5.17',
          wigly: '0.1.9',
        },
        reviews: [
          {
            performedOn: '2018-10-02',
            performedBy: '186087',
            scopeOfReview: 'full course review',
            notes:
              'There was a different dependency used for every lesson so I included every dependency for each lesson.',
          },
        ],
      },
    ],
  )