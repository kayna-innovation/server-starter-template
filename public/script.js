document.addEventListener("DOMContentLoaded", async () => {
  const userId = prompt("Please enter your user id");

  const searchParams = new URLSearchParams();
  searchParams.append("userId", userId);

  const token = await fetch(`./token?${searchParams.toString()}`)
    .then((res) => res.json())
    .then((data) => data.token);
  const { productId, platformId } = await fetch("./config").then((res) =>
    res.json()
  );

  window.Kayna.init(
    {
      extCustomerName: "John Doe",
      extCustomerEmail: "johndoe@mail.com",
      extCustomerID: userId,
      applicationFormData: {
        "details-1": {
          applicationDetails: {
            contact: {
              companyName: "Company Name",
              numberOfEmployees: "12",
              employerReferenceNumber: "employee-reference-number",
              estimatedTurnover: "$300,000",
              publicLiabilityCoverLevel: "5",
            },
            quote: {
              limit: 100000000,
              retention: 250000,
            },
          },
          productId,
        },
      },
    },
    {
      style: {
        height: 500,
        width: 500,
      },
      keys: {
        token,
        platformId,
      },
    }
  );
});
