'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var moduleInfo = require('../../package.json');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Accounts = require('./Accounts');  /* jshint ignore:line */
var Api = require('./Api');  /* jshint ignore:line */
var Authy = require('./Authy');  /* jshint ignore:line */
var Autopilot = require('./Autopilot');  /* jshint ignore:line */
var Chat = require('./Chat');  /* jshint ignore:line */
var Conversations = require('./Conversations');  /* jshint ignore:line */
var Fax = require('./Fax');  /* jshint ignore:line */
var FlexApi = require('./FlexApi');  /* jshint ignore:line */
var Insights = require('./Insights');  /* jshint ignore:line */
var IpMessaging = require('./IpMessaging');  /* jshint ignore:line */
var Lookups = require('./Lookups');  /* jshint ignore:line */
var Messaging = require('./Messaging');  /* jshint ignore:line */
var Monitor = require('./Monitor');  /* jshint ignore:line */
var Notify = require('./Notify');  /* jshint ignore:line */
var Numbers = require('./Numbers');  /* jshint ignore:line */
var Preview = require('./Preview');  /* jshint ignore:line */
var Pricing = require('./Pricing');  /* jshint ignore:line */
var Proxy = require('./Proxy');  /* jshint ignore:line */
var RequestClient = require('../base/RequestClient');  /* jshint ignore:line */
var Serverless = require('./Serverless');  /* jshint ignore:line */
var Studio = require('./Studio');  /* jshint ignore:line */
var Sync = require('./Sync');  /* jshint ignore:line */
var Taskrouter = require('./Taskrouter');  /* jshint ignore:line */
var Trunking = require('./Trunking');  /* jshint ignore:line */
var Verify = require('./Verify');  /* jshint ignore:line */
var Video = require('./Video');  /* jshint ignore:line */
var Voice = require('./Voice');  /* jshint ignore:line */
var Wireless = require('./Wireless');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 *
 * @property {Twilio.Accounts} accounts - accounts domain
 * @property {Twilio.Api} api - api domain
 * @property {Twilio.Authy} authy - authy domain
 * @property {Twilio.Autopilot} autopilot - autopilot domain
 * @property {Twilio.Chat} chat - chat domain
 * @property {Twilio.Conversations} conversations - conversations domain
 * @property {Twilio.Fax} fax - fax domain
 * @property {Twilio.FlexApi} flexApi - flex_api domain
 * @property {Twilio.Insights} insights - insights domain
 * @property {Twilio.IpMessaging} ipMessaging - ip_messaging domain
 * @property {Twilio.Lookups} lookups - lookups domain
 * @property {Twilio.Messaging} messaging - messaging domain
 * @property {Twilio.Monitor} monitor - monitor domain
 * @property {Twilio.Notify} notify - notify domain
 * @property {Twilio.Numbers} numbers - numbers domain
 * @property {Twilio.Preview} preview - preview domain
 * @property {Twilio.Pricing} pricing - pricing domain
 * @property {Twilio.Proxy} proxy - proxy domain
 * @property {Twilio.Serverless} serverless - serverless domain
 * @property {Twilio.Studio} studio - studio domain
 * @property {Twilio.Sync} sync - sync domain
 * @property {Twilio.Taskrouter} taskrouter - taskrouter domain
 * @property {Twilio.Trunking} trunking - trunking domain
 * @property {Twilio.Verify} verify - verify domain
 * @property {Twilio.Video} video - video domain
 * @property {Twilio.Voice} voice - voice domain
 * @property {Twilio.Wireless} wireless - wireless domain
 * @property {Twilio.Api.V2010.AccountContext.AddressList} addresses -
 *          addresses resource
 * @property {Twilio.Api.V2010.AccountContext.ApplicationList} applications -
 *          applications resource
 * @property {Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList} authorizedConnectApps -
 *          authorizedConnectApps resource
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList} availablePhoneNumbers -
 *          availablePhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.BalanceList} balance -
 *          balance resource
 * @property {Twilio.Api.V2010.AccountContext.CallList} calls - calls resource
 * @property {Twilio.Api.V2010.AccountContext.ConferenceList} conferences -
 *          conferences resource
 * @property {Twilio.Api.V2010.AccountContext.ConnectAppList} connectApps -
 *          connectApps resource
 * @property {Twilio.Api.V2010.AccountContext.IncomingPhoneNumberList} incomingPhoneNumbers -
 *          incomingPhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.KeyList} keys - keys resource
 * @property {Twilio.Api.V2010.AccountContext.MessageList} messages -
 *          messages resource
 * @property {Twilio.Api.V2010.AccountContext.NewKeyList} newKeys -
 *          newKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NewSigningKeyList} newSigningKeys -
 *          newSigningKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NotificationList} notifications -
 *          notifications resource
 * @property {Twilio.Api.V2010.AccountContext.OutgoingCallerIdList} outgoingCallerIds -
 *          outgoingCallerIds resource
 * @property {Twilio.Api.V2010.AccountContext.QueueList} queues - queues resource
 * @property {Twilio.Api.V2010.AccountContext.RecordingList} recordings -
 *          recordings resource
 * @property {Twilio.Api.V2010.AccountContext.SigningKeyList} signingKeys -
 *          signingKeys resource
 * @property {Twilio.Api.V2010.AccountContext.SipList} sip - sip resource
 * @property {Twilio.Api.V2010.AccountContext.ShortCodeList} shortCodes -
 *          shortCodes resource
 * @property {Twilio.Api.V2010.AccountContext.TokenList} tokens - tokens resource
 * @property {Twilio.Api.V2010.AccountContext.TranscriptionList} transcriptions -
 *          transcriptions resource
 * @property {Twilio.Api.V2010.AccountContext.UsageList} usage - usage resource
 * @property {Twilio.Api.V2010.AccountContext.ValidationRequestList} validationRequests -
 *          validationRequests resource
 *
 * @param {string} username -
 *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
 * @param {string} password -
 *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
 * @param {object} [opts] - The options argument
 * @param {RequestClient} [opts.httpClient] -
 *          The client used for http requests. Defaults to RequestClient
 * @param {string} [opts.accountSid] -
 *          The default accountSid. This is set to username if not provided
 * @param {object} [opts.env] - The environment object. Defaults to process.env
 * @param {string} [opts.region] - Twilio region to use. Defaults to none
 *
 * @returns {Twilio} A new instance of Twilio client
 */
/* jshint ignore:end */
function Twilio(username, password, opts) {
  opts = opts || {};
  var env = opts.env || process.env;

  this.username = username || env.TWILIO_ACCOUNT_SID;
  this.password = password || env.TWILIO_AUTH_TOKEN;
  this.accountSid = opts.accountSid || this.username;
  this.httpClient = opts.httpClient || new RequestClient();
  this.region = opts.region;

  if (!this.username) {
    throw new Error('username is required');
  }

  if (!this.password) {
    throw new Error('password is required');
  }

  if (!_.startsWith(this.accountSid, 'AC')) {
    throw new Error('accountSid must start with AC');
  }

  // Domains
  this._accounts = undefined;
  this._api = undefined;
  this._authy = undefined;
  this._autopilot = undefined;
  this._chat = undefined;
  this._conversations = undefined;
  this._fax = undefined;
  this._flexApi = undefined;
  this._insights = undefined;
  this._ipMessaging = undefined;
  this._lookups = undefined;
  this._messaging = undefined;
  this._monitor = undefined;
  this._notify = undefined;
  this._numbers = undefined;
  this._preview = undefined;
  this._pricing = undefined;
  this._proxy = undefined;
  this._serverless = undefined;
  this._studio = undefined;
  this._sync = undefined;
  this._taskrouter = undefined;
  this._trunking = undefined;
  this._verify = undefined;
  this._video = undefined;
  this._voice = undefined;
  this._wireless = undefined;
}

/* jshint ignore:start */
/**
 * Makes a request to the Twilio API using the configured http client.
 * Authentication information is automatically added if none is provided.
 *
 * @function request
 * @memberof Twilio#
 *
 * @param {object} opts - The options argument
 * @param {string} opts.method - The http method
 * @param {string} opts.uri - The request uri
 * @param {string} [opts.username] - The username used for auth
 * @param {string} [opts.password] - The password used for auth
 * @param {object} [opts.headers] - The request headers
 * @param {object} [opts.params] - The request params
 * @param {object} [opts.data] - The request data
 * @param {int} [opts.timeout] - The request timeout in milliseconds
 * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
 */
/* jshint ignore:end */
Twilio.prototype.request = function request(opts) {
  opts = opts || {};

  if (!opts.method) {
    throw new Error('method is required');
  }

  if (!opts.uri) {
    throw new Error('uri is required');
  }

  var username = opts.username || this.username;
  var password = opts.password || this.password;

  var headers = opts.headers || {};
  headers['User-Agent'] = util.format(
    'twilio-node/%s (node.js %s)',
    moduleInfo.version,
    process.version
  );
  headers['Accept-Charset'] = 'utf-8';

  if (opts.method === 'POST' && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  var uri = opts.uri;
  if (this.region) {
    var parts = _.split(uri, '.');

    if (parts.length > 1 && !_.isEqual(parts[1], this.region)) {
      uri = _.join(_.concat([parts[0], this.region], _.slice(parts, 1)), '.');
    }
  }

  return this.httpClient.request({
    method: opts.method,
    uri: uri,
    username: username,
    password: password,
    headers: headers,
    params: opts.params,
    data: opts.data,
    timeout: opts.timeout,
    allowRedirects: opts.allowRedirects,
  });
};

/* jshint ignore:start */
/**
 * Validates that a request to the new SSL certificate is successful.
 *
 * @throws {RestException} if the request fails
 *
 * @function validateSslCert
 * @memberof Twilio#
 */
/* jshint ignore:end */
Twilio.prototype.validateSslCert = function validateSslCert() {
  return this.httpClient.request({
    method: 'GET',
    uri: 'https://api.twilio.com:8443/2010-04-01/.json',
  }).then((response) => {
    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw RestException(response);
    }

    return response;
  });
};

Object.defineProperty(Twilio.prototype,
  'accounts', {
  get: function() {
    this._accounts = this._accounts || new Accounts(this);
    return this._accounts;
  }
});

Object.defineProperty(Twilio.prototype,
  'api', {
  get: function() {
    this._api = this._api || new Api(this);
    return this._api;
  }
});

Object.defineProperty(Twilio.prototype,
  'authy', {
  get: function() {
    this._authy = this._authy || new Authy(this);
    return this._authy;
  }
});

Object.defineProperty(Twilio.prototype,
  'autopilot', {
  get: function() {
    this._autopilot = this._autopilot || new Autopilot(this);
    return this._autopilot;
  }
});

Object.defineProperty(Twilio.prototype,
  'chat', {
  get: function() {
    this._chat = this._chat || new Chat(this);
    return this._chat;
  }
});

Object.defineProperty(Twilio.prototype,
  'conversations', {
  get: function() {
    this._conversations = this._conversations || new Conversations(this);
    return this._conversations;
  }
});

Object.defineProperty(Twilio.prototype,
  'fax', {
  get: function() {
    this._fax = this._fax || new Fax(this);
    return this._fax;
  }
});

Object.defineProperty(Twilio.prototype,
  'flexApi', {
  get: function() {
    this._flexApi = this._flexApi || new FlexApi(this);
    return this._flexApi;
  }
});

Object.defineProperty(Twilio.prototype,
  'insights', {
  get: function() {
    this._insights = this._insights || new Insights(this);
    return this._insights;
  }
});

Object.defineProperty(Twilio.prototype,
  'ipMessaging', {
  get: function() {
    this._ipMessaging = this._ipMessaging || new IpMessaging(this);
    return this._ipMessaging;
  }
});

Object.defineProperty(Twilio.prototype,
  'lookups', {
  get: function() {
    this._lookups = this._lookups || new Lookups(this);
    return this._lookups;
  }
});

Object.defineProperty(Twilio.prototype,
  'messaging', {
  get: function() {
    this._messaging = this._messaging || new Messaging(this);
    return this._messaging;
  }
});

Object.defineProperty(Twilio.prototype,
  'monitor', {
  get: function() {
    this._monitor = this._monitor || new Monitor(this);
    return this._monitor;
  }
});

Object.defineProperty(Twilio.prototype,
  'notify', {
  get: function() {
    this._notify = this._notify || new Notify(this);
    return this._notify;
  }
});

Object.defineProperty(Twilio.prototype,
  'numbers', {
  get: function() {
    this._numbers = this._numbers || new Numbers(this);
    return this._numbers;
  }
});

Object.defineProperty(Twilio.prototype,
  'preview', {
  get: function() {
    this._preview = this._preview || new Preview(this);
    return this._preview;
  }
});

Object.defineProperty(Twilio.prototype,
  'pricing', {
  get: function() {
    this._pricing = this._pricing || new Pricing(this);
    return this._pricing;
  }
});

Object.defineProperty(Twilio.prototype,
  'proxy', {
  get: function() {
    this._proxy = this._proxy || new Proxy(this);
    return this._proxy;
  }
});

Object.defineProperty(Twilio.prototype,
  'serverless', {
  get: function() {
    this._serverless = this._serverless || new Serverless(this);
    return this._serverless;
  }
});

Object.defineProperty(Twilio.prototype,
  'studio', {
  get: function() {
    this._studio = this._studio || new Studio(this);
    return this._studio;
  }
});

Object.defineProperty(Twilio.prototype,
  'sync', {
  get: function() {
    this._sync = this._sync || new Sync(this);
    return this._sync;
  }
});

Object.defineProperty(Twilio.prototype,
  'taskrouter', {
  get: function() {
    this._taskrouter = this._taskrouter || new Taskrouter(this);
    return this._taskrouter;
  }
});

Object.defineProperty(Twilio.prototype,
  'trunking', {
  get: function() {
    this._trunking = this._trunking || new Trunking(this);
    return this._trunking;
  }
});

Object.defineProperty(Twilio.prototype,
  'verify', {
  get: function() {
    this._verify = this._verify || new Verify(this);
    return this._verify;
  }
});

Object.defineProperty(Twilio.prototype,
  'video', {
  get: function() {
    this._video = this._video || new Video(this);
    return this._video;
  }
});

Object.defineProperty(Twilio.prototype,
  'voice', {
  get: function() {
    this._voice = this._voice || new Voice(this);
    return this._voice;
  }
});

Object.defineProperty(Twilio.prototype,
  'wireless', {
  get: function() {
    this._wireless = this._wireless || new Wireless(this);
    return this._wireless;
  }
});

Object.defineProperty(Twilio.prototype,
  'addresses', {
  get: function() {
    return this.api.account.addresses;
  }
});

Object.defineProperty(Twilio.prototype,
  'applications', {
  get: function() {
    return this.api.account.applications;
  }
});

Object.defineProperty(Twilio.prototype,
  'authorizedConnectApps', {
  get: function() {
    return this.api.account.authorizedConnectApps;
  }
});

Object.defineProperty(Twilio.prototype,
  'availablePhoneNumbers', {
  get: function() {
    return this.api.account.availablePhoneNumbers;
  }
});

Object.defineProperty(Twilio.prototype,
  'balance', {
  get: function() {
    return this.api.account.balance;
  }
});

Object.defineProperty(Twilio.prototype,
  'calls', {
  get: function() {
    return this.api.account.calls;
  }
});

Object.defineProperty(Twilio.prototype,
  'conferences', {
  get: function() {
    return this.api.account.conferences;
  }
});

Object.defineProperty(Twilio.prototype,
  'connectApps', {
  get: function() {
    return this.api.account.connectApps;
  }
});

Object.defineProperty(Twilio.prototype,
  'incomingPhoneNumbers', {
  get: function() {
    return this.api.account.incomingPhoneNumbers;
  }
});

Object.defineProperty(Twilio.prototype,
  'keys', {
  get: function() {
    return this.api.account.keys;
  }
});

Object.defineProperty(Twilio.prototype,
  'messages', {
  get: function() {
    return this.api.account.messages;
  }
});

Object.defineProperty(Twilio.prototype,
  'newKeys', {
  get: function() {
    return this.api.account.newKeys;
  }
});

Object.defineProperty(Twilio.prototype,
  'newSigningKeys', {
  get: function() {
    return this.api.account.newSigningKeys;
  }
});

Object.defineProperty(Twilio.prototype,
  'notifications', {
  get: function() {
    return this.api.account.notifications;
  }
});

Object.defineProperty(Twilio.prototype,
  'outgoingCallerIds', {
  get: function() {
    return this.api.account.outgoingCallerIds;
  }
});

Object.defineProperty(Twilio.prototype,
  'queues', {
  get: function() {
    return this.api.account.queues;
  }
});

Object.defineProperty(Twilio.prototype,
  'recordings', {
  get: function() {
    return this.api.account.recordings;
  }
});

Object.defineProperty(Twilio.prototype,
  'signingKeys', {
  get: function() {
    return this.api.account.signingKeys;
  }
});

Object.defineProperty(Twilio.prototype,
  'sip', {
  get: function() {
    return this.api.account.sip;
  }
});

Object.defineProperty(Twilio.prototype,
  'shortCodes', {
  get: function() {
    return this.api.account.shortCodes;
  }
});

Object.defineProperty(Twilio.prototype,
  'tokens', {
  get: function() {
    return this.api.account.tokens;
  }
});

Object.defineProperty(Twilio.prototype,
  'transcriptions', {
  get: function() {
    return this.api.account.transcriptions;
  }
});

Object.defineProperty(Twilio.prototype,
  'usage', {
  get: function() {
    return this.api.account.usage;
  }
});

Object.defineProperty(Twilio.prototype,
  'validationRequests', {
  get: function() {
    return this.api.account.validationRequests;
  }
});

module.exports = Twilio;
