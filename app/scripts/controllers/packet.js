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
    
    var ethernet = {
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
      }
      
    var vlan = {
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
        }
        
    var payload = {
          name: 'Payload',
          bytes: 1000
        }

    $scope.toggle = function() {
        if ($scope.packet == null) {
            $scope.packet = {
                bytes: 1020,
                protocols: $.extend(true, [], [ethernet, vlan, vlan, vlan, ethernet])
            }
        } else if ($scope.packet.protocols.length == 3) {
            $scope.packet.protocols.splice(1,2);
            $scope.packet.bytes = 14;
        } else if ($scope.packet.protocols.length == 1) {
            $scope.packet.protocols.splice(0,0,$.extend(true, {}, vlan));
            $scope.packet.bytes = 20;
        } else {
            $scope.packet = null;
        }
    };
  });
