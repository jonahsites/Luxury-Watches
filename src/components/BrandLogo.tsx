import React from 'react';

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 border border-[#D4AF37]/30 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-sm">
           <img 
             src="https://scontent-lga3-3.cdninstagram.com/v/t51.2885-19/408389581_1344772752840664_6986825354140330794_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDQ0LmMyIn0&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2gFvdTNUECFSAPKHJqLNwJzhwAipy_S79gu-xzHp9jiJx7QmoihWgQhxTSNTmJDO1rt5A051QI-EBFdwZpaeXV9l&_nc_ohc=g1EmyqXgRnIQ7kNvwGgSOgH&_nc_gid=rV102arKos8KMGQCLTK8rg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af5CDSJ5E_yxV7p5sA0zPeOyGUaGq2ahOmLJjJoREsj8Rw&oe=6A0548F2&_nc_sid=7a9f4b" 
             alt="Jewelry Business Logo"
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
      <div className="mt-4 text-[12px] uppercase tracking-[0.5em] text-[#D4AF37] font-serif font-bold border-t border-[#D4AF37]/20 pt-2 text-center">
        Jewelry Business
      </div>
    </div>
  );
};

export default BrandLogo;
