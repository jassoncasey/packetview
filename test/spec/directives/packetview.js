'use strict';

describe('Directive: packetView', function () {

  // load the directive's module
  beforeEach(module('packetviewApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<packet-view></packet-view>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the packetView directive');
  }));
});
