import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
    constructor(props) {
        super(props);

        // this.onClickBreakDown = (e) => {
        //   const id = e.target.dataset.id;
        //   let result = this.state.columnDefs.map(el => el.breakdown.id === id);
        //   this.setState({ showBreakDownModal: true, breakDownData: result });
        // } 

        this.state = {
          showBreakDownModal: false,
            columnDefs: [
                {headerName: "Source Address", field: "sourceAddress"},
                {headerName: "Destination Address", field: "destinationAddress"},
                {headerName: "Bytes In", field: "totalBytesIn"},
                {headerName: "Bytes Out", field: "totalBytesOut"},
                {headerName: "Packets In", field: "totalPacketsIn"},
                {headerName: "Packets Out", field: "totalPacketsOut"},
                {
                  headerName: "Application Breakdown", 
                  field: "applicationBreakdown",
                  // cellRenderer: (params) => {
                  //   console.log(params);
                  
                  //   return (<button data-id={params.id} onClick={this.onClickBreakDown}>CLICK</button>);
                  // }
                  
                  // (<button onClick={this.onClickBreakDown}>CLICK</button>),,,
                }                
            ],
            rowData: [
              {
                  "timestamp": 1531132987000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 600240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531132998000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531133010000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133022000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133033000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133058000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133116000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-dsig.mcast.net",
                  "destinationAddress": "MikroTik_172.22.22.109",
                  "totalBytesIn": 38252,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 378,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 38252,
                          "bytesOut": 0,
                          "packetsIn": 378,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133128000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 800480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4006,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133142000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133154000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-dsig.mcast.net",
                  "destinationAddress": "C1.NETDMT.COM_172.22.22.111",
                  "totalBytesIn": 38200,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 370,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 38200,
                          "bytesOut": 0,
                          "packetsIn": 370,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133167000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2008,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133179000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531133191000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133274000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1992,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 6,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1992,
                          "packetsIn": 0,
                          "packetsOut": 6
                      }
                  ]
              },
              {
                  "timestamp": 1531133302000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133332000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "R_172.22.22.102",
                  "destinationAddress": "172.22.22.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 96,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 137,
                          "applicationName": "NETBIOS Name Service",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 96,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531133362000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133386000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 412,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 412,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133404000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133416000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 200960,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1012,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 960,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133427000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133439000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 800560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4007,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133514000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531133542000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C3725.NETDMT.COM_172.22.22.130",
                  "totalBytesIn": 64,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 64,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133604000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133649000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 360,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 137,
                          "applicationName": "NETBIOS Name Service",
                          "protocol": 17,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133704000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400000,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2000,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133716000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133728000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133740000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C1.NETDMT.COM_172.22.22.111",
                  "totalBytesIn": 84,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 84,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133764000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "MikroTik_172.22.22.110",
                  "totalBytesIn": 64,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 64,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133812000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133842000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133857000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133902000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133914000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531133925000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134003000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134016000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134027000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "MikroTik_172.22.22.109",
                  "totalBytesIn": 16652,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 181,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 16652,
                          "bytesOut": 0,
                          "packetsIn": 181,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134039000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1006,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134066000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134079000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "RD-DESKTOP-2_172.22.22.105",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1592,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 8,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1592,
                          "packetsIn": 0,
                          "packetsOut": 8
                      }
                  ]
              },
              {
                  "timestamp": 1531134091000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134120000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "MikroTik_172.22.22.109",
                  "totalBytesIn": 84,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 84,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134146000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134226000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134259000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531134295000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134307000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134318000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 3984,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 12,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 3984,
                          "packetsIn": 0,
                          "packetsOut": 12
                      }
                  ]
              },
              {
                  "timestamp": 1531134330000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134342000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134353000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 920,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 11,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 920,
                          "bytesOut": 0,
                          "packetsIn": 11,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134382000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134411000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.152",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134436000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134448000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400720,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2009,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 720,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134473000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134608000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200720,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1009,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 720,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134622000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 4311,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4311,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134634000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134646000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134664000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134702000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "MikroTik_172.22.22.110",
                  "totalBytesIn": 96,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134714000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 232,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 232,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134742000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2600,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 25,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2600,
                          "bytesOut": 0,
                          "packetsIn": 25,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134755000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 200000,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1000,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134802000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531134837000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134909000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-dsig.mcast.net",
                  "destinationAddress": "MikroTik_172.22.22.110",
                  "totalBytesIn": 39352,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 393,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 39352,
                          "bytesOut": 0,
                          "packetsIn": 393,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134922000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2600,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 25,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2600,
                          "bytesOut": 0,
                          "packetsIn": 25,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134939000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 600640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3008,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134952000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134967000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 168,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 137,
                          "applicationName": "NETBIOS Name Service",
                          "protocol": 17,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531134978000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531134991000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135016000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135066000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2007,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135132000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "MikroTik_172.22.22.109",
                  "totalBytesIn": 84,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 84,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135162000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135204000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531135216000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400720,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2009,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 720,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135228000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 800640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4008,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135240000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 19760,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 190,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 19760,
                          "bytesOut": 0,
                          "packetsIn": 190,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135282000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135342000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135354000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135366000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 3624,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 3624,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135391000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135432000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135456000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135509000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400880,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2011,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 880,
                          "bytesOut": 0,
                          "packetsIn": 11,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135522000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3699,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3699,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135534000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135546000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135576000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135612000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 120,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 120,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135642000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135707000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 4923,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 28,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4923,
                          "bytesOut": 0,
                          "packetsIn": 28,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135768000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135809000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 201120,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1014,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 1120,
                          "bytesOut": 0,
                          "packetsIn": 14,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135822000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 3640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 35,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 3640,
                          "bytesOut": 0,
                          "packetsIn": 35,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135852000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135882000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135894000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 4923,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 28,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4923,
                          "bytesOut": 0,
                          "packetsIn": 28,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135906000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135932000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 200160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531135971000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136032000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136073000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136112000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136126000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2600,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 25,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2600,
                          "bytesOut": 0,
                          "packetsIn": 25,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136139000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400800,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2010,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 800,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136152000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136224000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136247000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136272000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136332000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1992,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 6,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1992,
                          "packetsIn": 0,
                          "packetsOut": 6
                      }
                  ]
              },
              {
                  "timestamp": 1531136392000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 96,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136421000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3699,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3699,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136434000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 476,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 332,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136446000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 42552,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 417,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 42072,
                          "bytesOut": 0,
                          "packetsIn": 411,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136464000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136488000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 1000400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136514000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136526000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136551000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "R_172.22.22.102",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 808,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 808,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531136576000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531136665000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 520,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 520,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136718000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "172.22.22.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 78,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 137,
                          "applicationName": "NETBIOS Name Service",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 78,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531136730000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 800720,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4009,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 720,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136742000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136754000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "224.0.0.251",
                  "totalBytesIn": 0,
                  "totalBytesOut": 146,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5353,
                          "applicationName": "Multicast DNS",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 146,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531136782000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136794000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 1616,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1616,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136806000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 42632,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 418,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 42072,
                          "bytesOut": 0,
                          "packetsIn": 411,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136872000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136889000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136902000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531136957000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531137009000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137021000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137039000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400720,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2009,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 720,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137052000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137068000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137082000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137123000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400000,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2000,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137148000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137171000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 400320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137197000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531137321000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137333000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137347000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137361000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 200000,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1000,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137377000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531137389000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 961,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 961,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137402000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137416000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137442000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137459000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137542000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531137557000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137609000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137621000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137634000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 1114,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1114,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137646000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137658000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137672000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1400320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1400000,
                          "bytesOut": 0,
                          "packetsIn": 7000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137686000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 4923,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 28,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4923,
                          "bytesOut": 0,
                          "packetsIn": 28,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137737000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531137776000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137801000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2600,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 25,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2600,
                          "bytesOut": 0,
                          "packetsIn": 25,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137908000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137922000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137934000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137947000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 200400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531137977000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 357,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 357,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531138016000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138029000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 600400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138054000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138109000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 961,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 961,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138136000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138149000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138187000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531138222000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138233000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 1616,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1616,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138247000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 200320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138264000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 600320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138277000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531138289000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138342000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138397000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531138411000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138427000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138440000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138466000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138479000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138491000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138522000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138534000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138547000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 200320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138560000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138572000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138610000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138637000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531138649000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138673000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138689000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138714000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138761000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138869000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200640,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1008,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 640,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138882000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138894000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138906000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138922000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138972000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138986000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531138998000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 6156,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 32,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 6156,
                          "bytesOut": 0,
                          "packetsIn": 32,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139023000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 780,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 780,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531139090000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139122000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 5544,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 5544,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139134000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139147000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139164000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139177000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531139189000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 1114,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1114,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139229000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139242000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139325000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139337000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 304,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 304,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139373000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139406000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139419000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531139431000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139456000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 720,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 9,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 720,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139468000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139481000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139494000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139537000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531139549000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 306,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 306,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139576000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 224,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 224,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139602000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139640000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139666000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139729000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139742000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139754000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2007,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139782000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139799000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139829000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139842000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139854000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139897000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531139909000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 153,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 153,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531139974000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 96,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140006000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 200080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140018000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531140031000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140043000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.152",
                  "totalBytesIn": 4923,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 28,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4923,
                          "bytesOut": 0,
                          "packetsIn": 28,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140055000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 3699,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3699,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140068000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140082000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140094000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C1.NETDMT.COM_172.22.22.111",
                  "totalBytesIn": 148,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 148,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140107000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140133000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 1452,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 28,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 2993,
                          "applicationName": "VERITAS VIS1",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 6628,
                          "applicationName": "AFE Stock Channel M/C",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 5044,
                          "applicationName": "LXI Event Service",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 1838,
                          "applicationName": "TALNET",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 23457,
                          "applicationName": "Aequus Service Mgmt",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 1786,
                          "applicationName": "funk-logger",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 2636,
                          "applicationName": "Solve",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 4594,
                          "applicationName": "IAS-Session (ANRI-ANRI)",
                          "protocol": 6,
                          "bytesIn": 120,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 1989,
                          "applicationName": "cisco RSRB Priority 3 port",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 2927,
                          "applicationName": "UNIMOBILECTRL",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 4061,
                          "applicationName": "Ice Location Service (TCP)",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 3352,
                          "applicationName": "Scalable SQL",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 1072,
                          "applicationName": "CARDAX",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 23,
                          "applicationName": "Telnet",
                          "protocol": 6,
                          "bytesIn": 612,
                          "bytesOut": 0,
                          "packetsIn": 14,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140206000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140232000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 78256,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 834,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 78256,
                          "bytesOut": 0,
                          "packetsIn": 834,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140258000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140294000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 399960,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 399800,
                          "bytesOut": 0,
                          "packetsIn": 1999,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140322000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140334000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140378000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531140429000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140466000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 540,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 540,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140608000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140620000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140632000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 999960,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 999800,
                          "bytesOut": 0,
                          "packetsIn": 4999,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140656000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 2613252,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4953,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2613072,
                          "bytesOut": 0,
                          "packetsIn": 4949,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 1804,
                          "applicationName": "ENL",
                          "protocol": 6,
                          "bytesIn": 60,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 23,
                          "applicationName": "Telnet",
                          "protocol": 6,
                          "bytesIn": 120,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140669000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140682000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140694000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140706000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140719000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140745000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140758000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140771000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140857000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531140883000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "totalBytesIn": 0,
                  "totalBytesOut": 5800,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 200,
                  "applicationBreakdown": [
                      {
                          "portNumber": 24724,
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 5800,
                          "packetsIn": 0,
                          "packetsOut": 200
                      }
                  ]
              },
              {
                  "timestamp": 1531140922000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140934000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 399880,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2000,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 399800,
                          "bytesOut": 0,
                          "packetsIn": 1999,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140948000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140962000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531140987000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141012000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1992,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 6,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1992,
                          "packetsIn": 0,
                          "packetsOut": 6
                      }
                  ]
              },
              {
                  "timestamp": 1531141029000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "C3725.NETDMT.COM_172.22.22.130",
                  "totalBytesIn": 19760,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 190,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 19760,
                          "bytesOut": 0,
                          "packetsIn": 190,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141054000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141067000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 780,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 780,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531141114000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141156000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141210000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141222000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141239000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141252000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141266000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141278000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531141314000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141329000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531141389000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 432,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 432,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141402000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531141414000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141427000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 1500,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 1500,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141487000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141514000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 200160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141526000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141538000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 432,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 432,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141551000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141569000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141582000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 1332,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 14,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 1332,
                          "bytesOut": 0,
                          "packetsIn": 14,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141612000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141639000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531141651000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141663000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141676000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141689000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141702000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141732000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141768000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "RD-DESKTOP-2_172.22.22.105",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 796,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 796,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531141819000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531141831000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141844000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 1428,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 1428,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141856000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 200480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1006,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141869000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141881000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141894000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141942000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 357,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 357,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531141954000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531141984000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142008000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142034000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142062000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142079000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142130000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142142000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142154000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142166000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142178000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531142216000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531142230000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142242000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 4311,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4311,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142268000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142302000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142317000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142329000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 836,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 836,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142374000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142431000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 306,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 306,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142444000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142456000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142469000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2007,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 560,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142482000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 3120,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 30,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 3120,
                          "bytesOut": 0,
                          "packetsIn": 30,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142494000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142567000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142598000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142679000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142722000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142734000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600000,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3000,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142748000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142778000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 476,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 476,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531142790000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 961,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 961,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142802000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142816000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142854000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142868000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 2340,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 12,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 2340,
                          "packetsIn": 0,
                          "packetsOut": 12
                      }
                  ]
              },
              {
                  "timestamp": 1531142914000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 264,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 264,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142927000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531142943000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531143008000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143022000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531143034000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143047000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143069000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 400480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2006,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143082000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143123000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 600080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143151000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143164000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "RD-DESKTOP-2_172.22.22.105",
                  "destinationAddress": "224.0.0.251",
                  "totalBytesIn": 0,
                  "totalBytesOut": 730,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 5,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5353,
                          "applicationName": "Multicast DNS",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 730,
                          "packetsIn": 0,
                          "packetsOut": 5
                      }
                  ]
              },
              {
                  "timestamp": 1531143187000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 3624,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 3624,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143199000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 357,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 357,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531143211000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 200080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143224000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1560,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 8,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1560,
                          "packetsIn": 0,
                          "packetsOut": 8
                      }
                  ]
              },
              {
                  "timestamp": 1531143262000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-dsig.mcast.net",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 28576,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 229,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 28576,
                          "bytesOut": 0,
                          "packetsIn": 229,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143274000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143331000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143344000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1560,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 8,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1560,
                          "packetsIn": 0,
                          "packetsOut": 8
                      }
                  ]
              },
              {
                  "timestamp": 1531143356000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143369000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 504,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 504,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143381000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531143395000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143419000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143432000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143472000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143502000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143517000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "R_172.22.22.102",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 808,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 808,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531143562000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143588000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143630000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143642000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143656000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143669000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 432,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 432,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143682000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143694000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 612,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 612,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143708000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 780,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 780,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531143742000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143759000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143802000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143828000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "igmp.mcast.net",
                  "destinationAddress": "CENTOS_FTP_172.22.22.106",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 2,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143892000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 71924,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 769,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 71924,
                          "bytesOut": 0,
                          "packetsIn": 769,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143910000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 1812,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 1812,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143922000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531143934000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 1000320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143948000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143969000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143982000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531143994000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 216,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 216,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144006000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144038000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144051000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144077000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531144132000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 2864,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 27,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 2544,
                          "bytesOut": 0,
                          "packetsIn": 23,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144218000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 357,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 357,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531144231000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 1114,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1114,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144243000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144257000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C3725.NETDMT.COM_172.22.22.130",
                  "totalBytesIn": 84,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 84,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144269000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144282000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 357,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 357,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531144294000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144309000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 3024,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 29,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 2544,
                          "bytesOut": 0,
                          "packetsIn": 23,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144324000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 800160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144338000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531144402000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144476000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "R_172.22.22.102",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 808,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 808,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531144522000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144534000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144549000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144563000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 600080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144578000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144589000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 961,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 961,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144602000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 200160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144642000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144669000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144689000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144758000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531144797000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 996,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 3,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 996,
                          "packetsIn": 0,
                          "packetsOut": 3
                      }
                  ]
              },
              {
                  "timestamp": 1531144809000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144822000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 3120,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 30,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 3120,
                          "bytesOut": 0,
                          "packetsIn": 30,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144838000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144852000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.152",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144869000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 199160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 997,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 199000,
                          "bytesOut": 0,
                          "packetsIn": 995,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144882000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144894000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144909000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 198976,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 999,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 198400,
                          "bytesOut": 0,
                          "packetsIn": 992,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531144960000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 288,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 288,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145014000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145074000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145118000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531145130000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 800480,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4006,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 480,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145154000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 198800,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 997,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 198400,
                          "bytesOut": 0,
                          "packetsIn": 992,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145180000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2080,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145211000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "MikroTik_172.22.22.110",
                  "totalBytesIn": 16652,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 181,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 16652,
                          "bytesOut": 0,
                          "packetsIn": 181,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145239000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531145251000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145265000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.152",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145277000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145319000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145344000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145358000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531145422000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145434000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145446000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 416,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145463000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145478000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531145491000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 1000400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 1000000,
                          "bytesOut": 0,
                          "packetsIn": 5000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145506000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145534000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 1196,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 14,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 1196,
                          "bytesOut": 0,
                          "packetsIn": 14,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145602000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145614000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145658000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531145670000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 153,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 153,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145695000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "ospf-all.mcast.net",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 76928,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 873,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 76928,
                          "bytesOut": 0,
                          "packetsIn": 873,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145721000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531145733000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 600400,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3005,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 400,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145745000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145757000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 4311,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4311,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145770000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 336,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 96,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145781000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1560,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 15,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1560,
                          "bytesOut": 0,
                          "packetsIn": 15,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145794000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 3104,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 38,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 3104,
                          "bytesOut": 0,
                          "packetsIn": 38,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145877000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145920000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145958000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531145970000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531145994000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146022000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146040000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146052000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 197920,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 992,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 197600,
                          "bytesOut": 0,
                          "packetsIn": 988,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146069000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 504,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 7,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 504,
                          "bytesOut": 0,
                          "packetsIn": 7,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146081000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.156",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146093000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 600240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 600000,
                          "bytesOut": 0,
                          "packetsIn": 3000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146117000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 3,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146130000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 3078,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 16,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3078,
                          "bytesOut": 0,
                          "packetsIn": 16,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146154000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 2352,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 29,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 2352,
                          "bytesOut": 0,
                          "packetsIn": 29,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146177000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146201000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 2466,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 8,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 2466,
                          "bytesOut": 0,
                          "packetsIn": 8,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146322000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146334000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 4311,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 20,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 4311,
                          "bytesOut": 0,
                          "packetsIn": 20,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146346000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146378000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.150",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146391000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 800160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 800000,
                          "bytesOut": 0,
                          "packetsIn": 4000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146417000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 1992,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 6,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 1992,
                          "packetsIn": 0,
                          "packetsOut": 6
                      }
                  ]
              },
              {
                  "timestamp": 1531146430000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 360,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 5,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 360,
                          "bytesOut": 0,
                          "packetsIn": 5,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146442000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531146466000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 197760,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 990,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 197600,
                          "bytesOut": 0,
                          "packetsIn": 988,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146499000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 238,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 2,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 238,
                          "packetsIn": 0,
                          "packetsOut": 2
                      }
                  ]
              },
              {
                  "timestamp": 1531146562000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146609000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200240,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1003,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 240,
                          "bytesOut": 0,
                          "packetsIn": 3,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146622000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 2600,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 25,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 2600,
                          "bytesOut": 0,
                          "packetsIn": 25,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146640000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 432,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 6,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 432,
                          "bytesOut": 0,
                          "packetsIn": 6,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146652000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "255.255.255.255",
                  "destinationAddress": "0.0.0.0",
                  "totalBytesIn": 5436,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 9,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 67,
                          "applicationName": "Bootstrap Protocol Server",
                          "protocol": 17,
                          "bytesIn": 5436,
                          "bytesOut": 0,
                          "packetsIn": 9,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146694000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 400080,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2001,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146706000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-1.NETDMT.COM_172.22.22.120",
                  "totalBytesIn": 160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146723000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 400320,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2004,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 320,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 400000,
                          "bytesOut": 0,
                          "packetsIn": 2000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146738000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.110",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531146765000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "C2.NETDMT.COM_172.22.22.126",
                  "totalBytesIn": 1748,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 19,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 89,
                          "bytesIn": 1748,
                          "bytesOut": 0,
                          "packetsIn": 19,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146777000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 3690,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 24,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 3690,
                          "bytesOut": 0,
                          "packetsIn": 24,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146802000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "MikroTik_172.22.22.109",
                  "destinationAddress": "255.255.255.255",
                  "totalBytesIn": 0,
                  "totalBytesOut": 119,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 1,
                  "applicationBreakdown": [
                      {
                          "portNumber": 5678,
                          "applicationName": "Remote Replication Agent Connection",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 119,
                          "packetsIn": 0,
                          "packetsOut": 1
                      }
                  ]
              },
              {
                  "timestamp": 1531146825000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "GNS3_172.22.22.107",
                  "destinationAddress": "239.255.255.250",
                  "totalBytesIn": 0,
                  "totalBytesOut": 780,
                  "totalPacketsIn": 0,
                  "totalPacketsOut": 4,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 0,
                          "bytesOut": 780,
                          "packetsIn": 0,
                          "packetsOut": 4
                      }
                  ]
              },
              {
                  "timestamp": 1531146874000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 808,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 808,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146920000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "172.16.126.6",
                  "totalBytesIn": 1040,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 10,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 1040,
                          "bytesOut": 0,
                          "packetsIn": 10,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146932000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-1.NETDMT.COM_172.22.22.180",
                  "totalBytesIn": 200160,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1002,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 200000,
                          "bytesOut": 0,
                          "packetsIn": 1000,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146946000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3745new-2.NETDMT.COM_172.22.22.112",
                  "totalBytesIn": 199360,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 998,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 160,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      },
                      {
                          "portNumber": 16384,
                          "applicationName": "Connected Corp",
                          "protocol": 17,
                          "bytesIn": 199200,
                          "bytesOut": 0,
                          "packetsIn": 996,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146969000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "172.22.22.255",
                  "destinationAddress": "172.22.22.101",
                  "totalBytesIn": 144,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 2,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 57621,
                          "protocol": 17,
                          "bytesIn": 144,
                          "bytesOut": 0,
                          "packetsIn": 2,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146982000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.153",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531146996000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "FW-RD.NETDMT.COM_172.22.22.1",
                  "totalBytesIn": 72,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 0,
                          "protocol": 1,
                          "bytesIn": 72,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531147042000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.151",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531147054000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.155",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531147065000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "C7200.NETDMT.COM_172.22.22.178",
                  "destinationAddress": "Cisco3640new-2.NETDMT.COM_172.22.22.129",
                  "totalBytesIn": 80,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 1,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1967,
                          "applicationName": "SNS Quote",
                          "protocol": 17,
                          "bytesIn": 80,
                          "bytesOut": 0,
                          "packetsIn": 1,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531147077000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.154",
                  "totalBytesIn": 1233,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 4,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1233,
                          "bytesOut": 0,
                          "packetsIn": 4,
                          "packetsOut": 0
                      }
                  ]
              },
              {
                  "timestamp": 1531147131000,
                  "hostname": "172.22.22.178",
                  "sourceAddress": "239.255.255.250",
                  "destinationAddress": "172.22.22.152",
                  "totalBytesIn": 1845,
                  "totalBytesOut": 0,
                  "totalPacketsIn": 12,
                  "totalPacketsOut": 0,
                  "applicationBreakdown": [
                      {
                          "portNumber": 1900,
                          "applicationName": "SSDP",
                          "protocol": 17,
                          "bytesIn": 1845,
                          "bytesOut": 0,
                          "packetsIn": 12,
                          "packetsOut": 0
                      }
                  ]
              }
          ]
          
        }
    }
    render() {
        return (
                <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '500px', 
	                width: '100%' }} 
		            >
                    <AgGridReact
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

export default App;