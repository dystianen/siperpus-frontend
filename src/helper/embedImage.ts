const embedImage = (url: string) => {
  return `${process.env.NEXT_PUBLIC_URL}${url}`;
};

export default embedImage;
