module.exports = [
  {
    route: "/local/ad/api",
    address: "https://localhost:8082",
    secure: false,
    pathRewrite: {
      "^/local/ad/api": "/",
    },
  },
  {
    route: "/local/ad/sec/api",
    address: "https://localhost:8082",
    secure: false,
    pathRewrite: {
      "^/local/ad/sec/api": "/",
      "^/local/ad/sec/api/system": "/system",
      "^/local/ad/sec/api/reg/ee": "/reg/ee",
      "^/local/ad/sec/api/reg/er": "/reg/er",
      "^/local/ad/sec/api/term": "/term",
      "^/local/ad/sec/api/enr/ee": "/enr/ee",
      "^/local/ad/sec/api/enr/er": "/enr/er",
      "^/local/ad/sec/api/enr/cee": "/enr/cee",
      "^/local/ad/sec/api/enr/sep": "/enr/sep",
      "^/local/ad/sec/api/mlfub": "/mlfub",
      "^/local/ad/sec/api/dm": "/dm",
      "^/local/ad/sec/api/transfer": "/transfer",
    },
  },
  {
    route: "/ad/api",
    address: "https://ec2-18-166-169-227.ap-east-1.compute.amazonaws.com",
    secure: false,
    pathRewrite: {
      "^/ad/api": "/ad/api",
    },
  },
  {
    route: "/ad/sec/api",
    address: "https://ec2-18-166-169-227.ap-east-1.compute.amazonaws.com",
    secure: false,
    pathRewrite: {
      "^/ad/sec/api": "/ad/sec/api",
    },
  },
  {
    route: "/ad/sec",
    address: "http://localhost:3000",
    secure: false,
  },
];
