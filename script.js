document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').innerHTML = `<p>ขอบคุณ, ${name}! เราจะติดต่อคุณกลับภายใน 24 ชั่วโมง</p>`;
    } else {
        document.getElementById('responseMessage').innerHTML = '<p style="color: red;">กรุณากรอกข้อมูลให้ครบถ้วน</p>';
    }
});document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').innerHTML = `<p>ขอบคุณ, ${name}! เราจะติดต่อคุณกลับภายใน 24 ชั่วโมง</p>`;
    } else {
        document.getElementById('responseMessage').innerHTML = '<p style="color: red;">กรุณากรอกข้อมูลให้ครบถ้วน</p>';
    }
});
