export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User Name",
      width: 130
    },

    
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  
   
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
        field: "transactions",
        headerName: "Transactions",
        width: 100,
      },
  ];
  
  //temporary data
  export const productRows = [
    {
      id: 1,
      product: "laptop",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 155,
      status: "active",
      price: 35,
    },
    {
      id: 2,
      product : "watch",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 200,
      status: "passive",
      price: 42,
    },
    {
      id: 3,
      product: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock : 111,
      status: "pending",
      price : 45,
    },
    {
      id: 4,
      product: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock : 765,
      status: "active",
      price : 16,
    },
    {
      id: 5,
      product: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 654,
      status: "passive",
      price: 22,
    },
    {
      id: 6,
      product: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 456,
      status: "active",
      price : 15,
    },
    {
      id: 7,
      product : "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock : 876,
      status: "passive",
      price  : 44,
    },
    {
      id: 8,
      product : "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock : 654,
      status: "active",
      price : 36,
    },
    {
      id: 9,
      product : "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock : 2343,
      status: "pending",
      price : 65,
    },
    {
      id: 10,
      product: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock : 654,
      status: "active",
      price : 65,
    },
  ]

  export const userRows = [
    {
      id: 1,
      username: "Snow",
      
      status: "active",
      email: "1snow@gmail.com",
      transactions : 35,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 2,
      username: "Jamie Lannister",
      
      email: "2snow@gmail.com",
      status: "passive",
      transactions : 42,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 3,
      username: "Lannister",
      
      email: "3snow@gmail.com",
      status: "pending",
      transactions : 45,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 4,
      username: "Stark",
      
      email: "4snow@gmail.com",
      status: "active",
      transactions : 16,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 5,
      username: "Targaryen",
     
      email: "5snow@gmail.com",
      status: "passive",
      transactions : 22,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 6,
      username: "Melisandre",
      
      email: "6snow@gmail.com",
      status: "active",
      transactions : 15,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 7,
      username: "Clifford",
     
      email: "7snow@gmail.com",
      status: "passive",
      transactions : 44,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 8,
      username: "Frances",
      
      email: "8snow@gmail.com",
      status: "active",
      transactions : 36,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 9,
      username: "Roxie",
    
      email: "snow@gmail.com",
      status: "pending",
      transactions : 65,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
    {
      id: 10,
      username: "Roxie",
      
      email: "snow@gmail.com",
      status: "active",
      transactions: 65,
      phone:"010022545",
      address:"suez, porttawfiq st",
      country:"USA",
    },
  ];


  export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.product}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 230,
    },
  
   
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
        field: "price",
        headerName: "Price",
        width: 100,
      },
  ];


  export const orderColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "customer",
      headerName: "Customer",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.customer}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total",
      width: 100,
    },
    {
      field: "payment",
      headerName: "Payment",
      width: 150,
    },
   
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  
  ];


 

  export const orderRows = [
    {
      id: 1,
      customer: "Saly",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "22/April",
      total: 150,
      payment : "Visa",
      status:"approved"
    },
    {
      id: 2,
      customer: "Saly",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "22/April",
      total: 150,
      payment : "Cash In Delivery",
      status:"approved"
    },
    {
      id: 3,
      customer: "Saly",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "22/April",
      total: 150,
      payment : "Cash In Delivery",
      status:"approved"
    },
    {
      id: 4,
      customer: "Saly",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "22/April",
      total: 150,
      payment : "Cash In Delivery",
      status:"approved"
    },
    
  ];


  