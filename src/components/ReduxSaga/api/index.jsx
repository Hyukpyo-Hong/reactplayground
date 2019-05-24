const url = "https://picsum.photos/v2/list";

export const fetchImages = async page => {
  const response = await fetch(`${url}?page=${page}&limit=1`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const fetchImageStats = async id => {
  const response = {
    downloads: {
      total: Math.random() * 10
    }
  };
  const data = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
