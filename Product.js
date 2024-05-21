document.addEventListener('DOMContentLoaded', function() {  
    const categories = document.querySelectorAll('.category');  
    
    categories.forEach(category => {  
        
      const productImg = category.querySelector('.product-img');  
      const subCategories = category.querySelector('.sub-categories');  
        
      category.addEventListener('mouseenter', function() {  
         
        productImg.style.transform = 'translate(-50%, -50%) scale(0.8)';  
            
        subCategories.style.display = 'block';  
        subCategories.style.height = subCategories.scrollHeight + 'px';  
      });  
    
      category.addEventListener('mouseleave', function() {   
        productImg.style.transform = 'translate(-50%, -50%)';  
          
        subCategories.style.display = 'none';  
        subCategories.style.height = '0'; 
      });  
    });  
  });