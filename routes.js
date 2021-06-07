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
    },
  },
  {
    route: "/ad/api",
    address: "https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com",
    secure: false,
    pathRewrite: {
      "^/ad/api": "/ad/api",
    },
  },
  {
    route: "/ad/sec/api",
    address: "https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com",
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
