const d1 = new Date('2024-01-01');
const d2 = new Date(); // วันที่ปัจจุบัน

const countDays = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // จำนวนมิลลิวินาทีในหนึ่งวัน
    const diffInTime = endDate.getTime() - startDate.getTime(); // ความต่างของเวลาระหว่างสองวันที่กำหนด
    return Math.round(diffInTime / oneDay); // คำนวณจำนวนวันและปัดเศษ
};

console.log(countDays(d1, d2)); // แสดงผลจำนวนวันที่นับ

const birthDate = new Date('2023-01-01');

const calculateAge = (birthDate) => {
    const today = new Date(); // วันที่ปัจจุบัน
    let age = today.getFullYear() - birthDate.getFullYear(); // คำนวณความต่างของปี

    // ตรวจสอบเดือนและวันเพื่อลดอายุลงหนึ่งปีถ้าปีนี้ยังไม่ถึงวันเกิด
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age; // คืนค่าอายุ
};

console.log(calculateAge(birthDate)); // แสดงผลอายุที่คำนวณได้
