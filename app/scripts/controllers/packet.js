'use strict';

/**
 * @ngdoc function
 * @name packetviewApp.controller:PacketCtrl
 * @description
 * # PacketCtrl
 * Controller of the packetviewApp
 */
angular.module('packetviewApp')
  .controller('PacketCtrl', function ($scope) {
    $scope.packet = null;
    $scope.idx = 0;

    $scope.packets = [
      null,
      {
        bytes: 1063,
        protocols: [{
          name: 'Ethernet',
          bytes: 14,
          fields: [{
            name: 'Src',
            value: '00:00:00:00:00:00'
          }, {
            name: 'Dst',
            value: '00:00:00:00:00:00'
          }, {
            name: 'Type',
            value: 'VLAN(0x8100)'
          }]
        }, {
          name: 'VLAN',
          bytes: 4,
          fields: [{
            name: 'PCP',
            value: 0
          }, {
            name: 'VID',
            value: 0
          }, {
            name: 'EtherType',
            value: 'VLAN(0x8100)'
          }]
        }, {
          name: 'Payload',
          bytes: 1000
        }]
      }, {
    }];

    $scope.toggle = function() {
      $scope.idx = ($scope.idx + 1) % $scope.packets.length;
      $scope.packet = $scope.packets[$scope.idx]
    };
  });
