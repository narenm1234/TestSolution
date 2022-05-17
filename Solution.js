function OnBoardStudents(raw) {
    const input = raw.replace('fin', '').split('reg').slice(1);
    return input.reduce((acc, desc) => {
      const [rollNo, className, foodPref] = desc.trim().split(' ');
      const hostelKey = `${className}:${foodPref}`;
      if (!acc[hostelKey]) acc[hostelKey] = [];
      acc[hostelKey].push(rollNo);
      return acc;
    }, {});
  }
  const inout = '12reg 1 B Vreg 2 A Vreg 3 A Vreg 4 B NVreg 5 B Vreg 6 A NVreg 7 A Vreg 8 A NVreg 9 B NVreg 10 B Vreg 11 A NVreg 12 B NVfin';
  console.log(OnBoardStudents(inout));