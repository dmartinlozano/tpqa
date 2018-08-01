import { Router } from 'express';
import User from './api/user';
import Role from './api/role';
import NodesHierarchy from './api/nodes_hierarchy';
import TestProject from './api/test-project';
import TestSuite from './api/test-suite';
import TestCase from './api/test-case';
import Attachments from './api/attachments';
import IssueTracker from './api/issue-tracker';
import CodeTracker from './api/code-tracker';
import AuthMiddleware from './middleware/auth.js';

const routes = new Router();
routes.get('/', NodesHierarchy.ok);
routes.post('/login', User.login);
routes.post('/rights', User.rights);
routes.get('/testspecifications/:testProjectId', AuthMiddleware.permissions("VIEW_TEST_PROJECT"), NodesHierarchy.getTree);
routes.get('/testprojects', AuthMiddleware.permissions("VIEW_TEST_PROJECT"), TestProject.listWithPermissions);
routes.get('/testprojects/:testProjectId', TestProject.details);
routes.get('/testsuites/:testSuiteId', TestSuite.details);
routes.get('/attachments/:id', Attachments.list);
routes.get('/testsuites/:testSuiteId/keywords', TestSuite.keywords);
routes.get('/testcases/:testCaseId/versions', TestCase.versions);
routes.get('/testcases/:testCaseId/versions/:testCaseVersionId', TestCase.details);
routes.get('/testcases/:testCaseId/versions/:testCaseVersionId/steps', TestCase.steps);
routes.get('/testcases/:testCaseId/keywords', TestCase.keywords);
routes.get('/testcases/:testCaseId/requirements', TestCase.requirements);
routes.get('/testcases/:testCaseId/related', TestCase.related);
routes.get('/users', AuthMiddleware.permissions("MGT_USERS"), User.list);
routes.get('/users/count', User.count);
routes.get('/users/resetpassword', User.resetPassword);
routes.get('/roles', AuthMiddleware.permissions("ROLE_MANAGEMENT"), Role.list);
routes.get('/roles/testproject', AuthMiddleware.permissions("ROLE_MANAGEMENT"), Role.listByTestProject);
routes.get('/issuetracker', AuthMiddleware.permissions("ISSUETRACKER_VIEW"), IssueTracker.list);
routes.get('/codetracker', AuthMiddleware.permissions("CODETRACKER_VIEW"), CodeTracker.list);
export default routes;
