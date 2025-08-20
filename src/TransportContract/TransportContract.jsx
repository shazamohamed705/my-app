import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
 import "../styles/TransportContract.css"; import logo from "../assets/logo.png";
 const TransportContract = () => {
  const { id } = useParams(); 

  const [trip, setTrip] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [driver, setDriver] = useState(null);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    if (!id) return;

    setTrip(null); 
    setVehicle(null);
    setDriver(null);
    setPassengers([]);

    fetch(`https://my-bus.storage-te.com/api/trips/${id}/pdf`)
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setTrip(result.data.trip);
          setVehicle(result.data.vehicle);
          setDriver(result.data.driver);
          setPassengers(result.data.trip.passengers);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!trip) return <p>⏳ جاري تحميل البيانات...</p>;

  return (
    <>
      {/* الصفحة الأولى */}
      <div className="contract-outer">
        <div className="contract-inner">
          <div className="contract-body">

            {/* الهيدر */}
            <div className="header">
             
              <div className="logo-box">
                <div className="logo-text">
                <div>مؤسسة إبداعات العبور للنقليات</div>
                <div>ج/ 0555989407</div>
                <div>المدينة المنورة</div>
                <div>ت.س / 4650252501</div>
                </div>
              </div>
              <div className="center-title">
                <img src={logo} alt="Logo" className="title-logo" />
                <div className="main-title">أمر تشغيل</div>
                <div className="sub-title">عقد نقل على الطرق البرية</div>
              </div>
              <div className="company-info">
                <div>Obour Creations Transport EST  </div>
                <div>M/ 0555989407</div>
                <div>AL Madinah AL Munawwara </div>
                <div>C.R / 4650252501</div>
              </div>
            </div>

            <div className="meta-row">
            <p>  امر التشغيل :24/5/2025</p>

                <p>
                تم إبرام هذا العقد بين المتعاقدين بناء على المادة (٣٩) التاسعة والثلاثون من الأنظمة المنظمة لنشاط النقل المتخصص وتأجير و توجيه الحافلات وبناء على الفقرة (١) من المادة (٢٩) والتي تنص على ان يجب على الناقل إبرام عقد نقل مع الاطراف المحددين في المادة (٤٠) قبل تنفيذ عمليات النقل على الطرق البرية و بما ال يخالف أحكام هذه اللائحة و وفقا الآلية التي تحددها هيئة النقل و بناء على ما سبق تم إبرام عقد النقل بين الأطراف الآتية
              </p>
            </div>

          {/* جدول الطرف الأول */}
          <table className="info-table first-party">
           {/* جدول الطرف الأول */}

  <colgroup>
    <col style={{ width: "20%" }} /> {/* الطرف الأول */}
    <col style={{ width: "50%" }} /> {/* عمود صفين */}
    <col style={{ width: "30%" }} /> {/* العمود الطويل */}
  </colgroup>
  <tbody>
    <tr>
      {/* عمود عنوان جانبي طويل */}
      <th rowSpan="2" className="side-title">الطرف الأول</th>

      {/* الصف الأول من العمود العريض */}
      <td>مؤسسةابدعات العبور للنقليات </td>

      {/* العمود الطولي */}
      <td rowSpan="2">
  
        جوال /0555989406
      </td>
    </tr>
    <tr>
      {/* الصف الثاني من العمود العريض */}
      <td>7032253456 /4560252501/ س.ت</td>
    </tr>
  </tbody>
</table>
          <div className="vehicle-party-row">
<table className="same-layout-table">
  <colgroup>
    <col style={{ width: "20%" }} /> {/* العمود الجانبي */}
    <col style={{ width: "20%" }} />
    <col style={{ width: "20%" }} />
    <col style={{ width: "25%" }} />
    <col style={{ width: "25%" }} />
  </colgroup>

  <thead>
    <tr>
      <th></th>
      <th colSpan="4" style={{ textAlign: "center" }}>السائق الأساسي</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th rowSpan="3" className="side-title">الطرف الثاني</th>
      <td>الاسم</td>
      <td colSpan="3">{driver?.name}</td>
    </tr>
    <tr>
      <td>رقم الجوال </td>
      <td>{driver?.phone}</td>
      <td>الرقم القومي </td>
      <td>{driver?.driver_profile?.national_id}</td>
    </tr>
    <tr>
      <td>الجنسيه</td>
      <td>{driver?.driver_profile?.nationality}</td>
      <td>رقم الرخصه</td>
      <td>{driver?.driver_profile?.driving_license_number}</td>
    </tr>
  </tbody>
</table>

           <table className="info-table ">
  <colgroup>
    <col style={{ width: "25%" }} /> {/* العمود الأول */}
    <col style={{ width: "25%" }} /> {/* العمود الثاني */}
    <col style={{ width: "25%" }} /> {/* العمود الثالث */}
    <col style={{ width: "25%" }} /> {/* العمود الرابع */}
  </colgroup>

  <thead>
    <tr>
      <th>موديل السيارة</th>
      <th>رقم اللوحة</th>
      <th>نوع السيارة</th>
      <th>مالك السياره </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{vehicle?.vehicle_model}</td>
      <td>{vehicle?.plate_number}</td>
      <td>{vehicle?.vehicle_type}</td>
      <td>{vehicle?.owner_name}</td>
    </tr>
   
  </tbody>
  
</table>

 </div>
          {/* الشروط */}
          <div className="conditions">
            <p>
              اتفق الطرفان على أن ينفذ الطرف الأول عملية النقل للطرف الثاني مع مرافقيه وذويه
              من الموقع المحدد مسبقًا وتوصيلهم إلى الجهة المحددة بالعقد ...
            </p>
            <p>
              في حالة إلغاء التعاقد لأي سبب شخصي أو أسباب أخرى تتعلق بالحجوزات أو الأنظمة
              تكون سياسة الإلغاء والاستبدال ...
            </p>
          </div>
  {/* بيانات السيارة */}
          <table className=".same-layout-table">
            <colgroup>
              <col style={{ width: "25%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "25%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>النقل من </th>
                <th>   {trip.departure_location  }  </th>
                <th>وصولا الي</th>
                <th>   {trip.destination_location}  </th>
              </tr>
            </thead>
          </table>
          {/* الشروط */}
          <div className="conditions">
            <p>
              اتفق الطرفان على أن ينفذ الطرف الأول عملية النقل للطرف الثاني مع مرافقيه وذويه
              من الموقع المحدد مسبقًا وتوصيلهم إلى الجهة المحددة بالعقد ...
            </p>
            <p>
              في حالة إلغاء التعاقد لأي سبب شخصي أو أسباب أخرى تتعلق بالحجوزات أو الأنظمة
              تكون سياسة الإلغاء والاستبدال ...
            </p>
          </div>
          <div className="conditions">
              <p>اتفق الطرفان على أن ينفذ الطرف الأول عملية النقل للطرف الثاني ...</p>
            </div>
          </div>
        </div>
      </div>

      {/* الصفحة الثانية */}
      <div className="contract-outer">
        <div className="contract-inner">
          <div className="contract-body">

            {/* الهيدر مكرر */}
            <div className="header">
              <div className="logo-box">
                <div className="logo-text">
                <div>مؤسسة إبداعات العبور للنقليات</div>
                <div>ج/ 0555989407</div>
                <div>المدينة المنورة</div>
                <div>ت.س / 4650252501</div>
                </div>
              </div>
              <div className="center-title">
                <img src={logo} alt="Logo" className="title-logo" />
                <div className="main-title">أمر تشغيل</div>
                <div className="sub-title">عقد نقل على الطرق البرية</div>
              </div>
              <div className="company-info">
                <div> Obour Creatinons Transport Est </div>
                <div>M/0555989409</div>
                <div> AL Madinah AL Munawwara</div>
                <div>C.R /4650252501 </div>
              </div>
            </div>
            <table className="same-layout-table">
               <thead>
    <tr>
      <th style={{ backgroundColor: "#00a0e3" }}>VEHICLE#</th>
      <th style={{ backgroundColor: "#00a0e3" }} >VEHICLE#</th>
     <th style={{ backgroundColor: "#00a0e3" }} >IQAMA#</th>
     <th style={{ backgroundColor: "#00a0e3" }}>MOBILE#</th>
      <th style={{ backgroundColor: "#00a0e3" }}>DRIVER NAME</th>

    </tr>
     </thead>
    <tbody>
      <tr>
        <td>{vehicle?.plate_number}</td>
        <td> {vehicle?.vehicle_model}</td>
        <td> {driver?.driver_profile?.national_id}</td>
        <td> {driver?.phone}</td>
        <td> {driver?.name}</td>

      </tr>
    </tbody>
             </table>
               <table className="blue-table">
            <thead>
                <tr>
                <th style={{ backgroundColor: "#00a0e3" }}>DATE</th>
                <th style={{ backgroundColor: "#00a0e3" }} colSpan="3">DESTINATION</th>
      
                 </tr>
              </thead>
             <tbody>
              {/* صف TO */}
            <tr>
        <td rowSpan="2" style={{ fontWeight: "bold", fontSize: "18px", textAlign: "center" }}>
          {trip?.departure_time && new Date(trip.departure_time).toLocaleDateString("ar-EG")}
          </td>
       <td rowSpan="2" style={{ fontWeight: "bold", textAlign: "center" }}>
           {trip.departure_location  }

     
        </td>
       <td style={{  fontWeight: "bold", textAlign: "center"}}>TO</td>
       <td rowSpan="2"  style={{ fontWeight:"bold",textAlign: "center"}}> 
          {trip.destination_location}  
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "center", fontWeight: "bold" }}>
        {trip.distance_km ? ` ${trip.distance_km}KM `: "غير متوفر "}
      </td>
    </tr>
  </tbody>
</table>

 <table className="passenger-table" style={{ borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th style={{ backgroundColor: "#00a0e3", color: "#fff" }}>NO.</th>
      <th style={{ backgroundColor: "#00a0e3", color: "#fff" }}>PASSENGER NAME #</th>
      <th style={{ backgroundColor: "#00a0e3", color: "#fff" }}>IDENTY #</th>
      <th style={{ backgroundColor: "#00a0e3", color: "#fff" }}>NATIONALITY#S</th>
    </tr>
  </thead>
  <tbody>
    {passengers.map(( p, i) => (
      <tr key={p.id}>
        <td>{i + 1}</td>
        <td>{p.name}</td>
        <td>{p.national_id}</td>
        <td>{p.nationality}</td>
     
      </tr>
    ))}
  </tbody>
  </table>
</div>
            

          </div>
        </div>
      
    </>
  );
};

export default TransportContract;

          


          

         