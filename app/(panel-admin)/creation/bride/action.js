import toast from "react-hot-toast";

export async function fetchBride(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());

  const res = await fetch("/api/weddings/bride", {
    method: "POST",
    body: JSON.stringify(formJson),
  });

  const bride = await res.json();

  if (res.status === 401) {
    throw { name: "Unauthorized", message: bride.message };
  }

  localStorage.setItem("brideId", bride.data?._id);
}

export async function errorBride(error) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (error.name === "Unauthorized") {
    return toast.error(error.message);
  }

  return toast.error(error.message);
}
