const nextConfig = {
  async headers() {
    return [
      {
        source: "/widget",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM *",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' *;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;