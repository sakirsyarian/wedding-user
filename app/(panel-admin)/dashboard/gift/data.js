const gifts = [
  {
    title: "Rekening Bank",
    platformName: {
      title: "Nama Bank",
      name: "bankName",
      placeholder: "Pilih Platform",
      select: ["BCA", "BNI", "BRI", "CIMB", "Mandiri"],
    },
    platformUser: {
      title: "Atas Nama",
      name: "bankUser",
      placeholder: "Contoh : Putri Ratna",
    },
    platformNumber: {
      title: "No. Rekening",
      name: "bankNumber",
      placeholder: "Contoh : 0123456789",
    },
  },
  {
    title: "Dompet Digital",
    platformName: {
      title: "Nama Platform",
      name: "digitalName",
      placeholder: "Pilih Platform",
      select: ["Gopay", "Dana", "Linkaja", "Shopee Pay", "OVO"],
    },
    platformUser: {
      title: "Atas Nama",
      name: "digitalUser",
      placeholder: "Contoh : Putri Ratna",
    },
    platformNumber: {
      title: "No. Telepon",
      name: "digitalNumber",
      placeholder: "Contoh : 0851645254",
    },
  },
];

export default gifts;
