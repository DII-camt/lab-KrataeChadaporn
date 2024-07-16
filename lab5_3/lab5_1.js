// 1.1 หาค่า 2 ยกกำลัง 100
let result1 = Math.pow(2, 100);
console.log(result1);

// 1.2 หาค่าพื้นที่วงกลม
let radius = 1000;
let area = Math.PI * Math.pow(radius, 2);
console.log(area);

// 3. สร้าง function ที่สุ่มเลข x โดย x มีค่าตั้งแต่ -1 <= x <= 2 และเป็นทศนิยมได้
function randomX() {
    return (Math.random() * 3) - 1; // ให้ค่าในช่วง -1 ถึง 2
}

console.log(randomX());

// 4. สร้างข้อความ "I am bad."
for (let i = 0; i < 10; i++) {
    document.getElementById("demo").innerHTML += "I am bad.<br />";
}

// ฟังก์ชันที่ใช้ในปุ่ม onclick เพื่อเปลี่ยน "bad" เป็น "good"
function myFunction() {
    let demoElement = document.getElementById("demo");
    demoElement.innerHTML = demoElement.innerHTML.replace(/I am bad./g, "I am good.");
}
