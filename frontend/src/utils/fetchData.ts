export const fetchData = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
