export const cBasePath = (path: string) => {
  const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basepath}${path.startsWith("/") ? path : `/${path}`}`;
};
