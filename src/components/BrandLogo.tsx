import React from 'react';

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 border border-white/10 rounded-none flex items-center justify-center overflow-hidden bg-black shadow-2xl">
           <img 
             src="https://scontent-lga3-1.cdninstagram.com/v/t51.82787-19/655866728_18042094658572340_7709571949227778210_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2gFnMBKuzws2I3-ABiySEzljkGUIJ19TdxTh7Bu_t7nQjkfqxSi30UUn4MfiQP46fRxBALhISB7Qg4GxNuCvVMzM&_nc_ohc=Eo0KB9TnGHcQ7kNvwFLx4Ea&_nc_gid=ltQgvLFnlG6B8UBmiBa3IA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af5kM4EL9I8VrE1bUGcCtnn597m69H2AW0rFRQGLh0Rehw&oe=6A056931&_nc_sid=7a9f4b" 
             alt="Luxury Watches Logo"
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
      <div className="mt-4 text-[12px] uppercase tracking-[0.5em] text-white font-serif font-bold border-t border-white/20 pt-2 text-center uppercase">
        Luxury Watches
      </div>
    </div>
  );
};

export default BrandLogo;
