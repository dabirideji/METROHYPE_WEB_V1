const otpForm = document.getElementById('otpForm');
    const otpInput = document.getElementById('otp');
    const errorMsg = document.getElementById('error-msg');
    const toggleVisibility = document.getElementById('toggleVisibility');
    const toggleIcon = document.getElementById('toggleIcon');
    
    let isOtpVisible = false; 
   
    otpForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      const otpValue = otpInput.value.trim();

      
      if (otpValue.length !== 6 || isNaN(otpValue)) {
        errorMsg.classList.remove('hidden'); 
      } else {
        errorMsg.classList.add('hidden');
        
       
        alert('OTP verified successfully!');
       
      }
    });

    
    toggleVisibility.addEventListener('click', function() {
      isOtpVisible = !isOOtpVisible ? 'text' : 'password'; 
      toggleIcon.classLitpVisible;
      otpInput.type = isst.toggle('fa-eye'); 
      toggleIcon.classList.toggle('fa-eye-slash');
    });