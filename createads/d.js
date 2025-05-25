const allowedHosts = [
  "srr4i.netlify.app",
  "www.srr4i.netlify.app",
];

if (!allowedHosts.includes(window.location.hostname)) {
  document.body.innerHTML = "";
  alert("This site is not authorized to run here :(");
  throw new Error("Unauthorized domain");
}



document.getElementById('disp').innerHTML=`

  <div class="box-contener">


    <div class="input-wrapper">
      <input type="text" class="title" value="عنوان العرض" />
      <div class="custom-controls">
        <input type="color" class="color-picker" style="color: #e63946;" />
        <select class="font-picker">
          <option value="El Messiri">الخط المسيري (أنيق وعصري)</option>
          <option value="Amiri">الخط الأميري (كلاسيكي وفاخر)</option>
          <option value="Almarai">خط المراعي (بسيط وواضح)</option>
          <option value="Changa">تشانغا (عصري بحروف مستديرة)</option>
          <option value="Dubai">خط دبي (رسمي وأنيق)</option>
          <option value="Harmattan">هارماتان (خفيف وسهل القراءة)</option>
          <option value="Lateef">لطيف (ناعم وانسيابي)</option>
          <option value="Lobster">لوبستر (زخرفي ولافت)</option>
          <option value="Markazi Text">خط مركزي (مثالي للقراءة الطويلة)</option>
          <option value="Mulish">موليش (نظيف وعصري)</option>
          <option value="Noto Sans Arabic">نوتو سانس العربي (واضح وسهل القراءة)</option>
          <option value="Roboto Slab">روبوتو سلاب (قوي ومستقيم)</option>
          <option value="Sanchez">سانشيز (رسمي بلمسة حديثة)</option>
          <option value="Tajawal">خط تجوال (حديث وانسيابي)</option>
          <option value="Varela Round">فارلا راوند (حواف ناعمة ومستديرة)</option>
          <option value="Yusei Magic">يوسي ماجيك (بسيط وممتع)</option>
          <option value="Zilla Slab">زيلا سلاب (معاصر بأطراف قوية)</option>
        </select>
        <input type="number" class="font-size-picker"  min="10" max="200" value="85" />
        <button class="delete-btn">حذف</button>
      </div>
    </div>

    <div class="input-wrapper">
      <input type="text" class="name" value="اسم المنتج" />
      <div class="custom-controls">
        <input type="color" class="color-picker" style="color: #1d3557;" />
        <select class="font-picker">
          <option value="El Messiri">الخط المسيري (أنيق وعصري)</option>
          <option value="Amiri">الخط الأميري (كلاسيكي وفاخر)</option>
          <option value="Almarai">خط المراعي (بسيط وواضح)</option>
          <option value="Changa">تشانغا (عصري بحروف مستديرة)</option>
          <option value="Dubai">خط دبي (رسمي وأنيق)</option>
          <option value="Harmattan">هارماتان (خفيف وسهل القراءة)</option>
          <option value="Lateef">لطيف (ناعم وانسيابي)</option>
          <option value="Lobster">لوبستر (زخرفي ولافت)</option>
          <option value="Markazi Text">خط مركزي (مثالي للقراءة الطويلة)</option>
          <option value="Mulish">موليش (نظيف وعصري)</option>
          <option value="Noto Sans Arabic">نوتو سانس العربي (واضح وسهل القراءة)</option>
          <option value="Roboto Slab">روبوتو سلاب (قوي ومستقيم)</option>
          <option value="Sanchez">سانشيز (رسمي بلمسة حديثة)</option>
          <option value="Tajawal">خط تجوال (حديث وانسيابي)</option>
          <option value="Varela Round">فارلا راوند (حواف ناعمة ومستديرة)</option>
          <option value="Yusei Magic">يوسي ماجيك (بسيط وممتع)</option>
          <option value="Zilla Slab">زيلا سلاب (معاصر بأطراف قوية)</option>
        </select>
        <input type="number" class="font-size-picker"  min="10" max="200" value="90" />
        <button class="delete-btn">حذف</button>
      </div>
    </div>

    <div class="input-wrapper">
      <input type="text" class="price-old" value="السعر القديم" />
      <div class="custom-controls">
        <input type="color" class="color-picker" style="color: #b22222;" />
        <select class="font-picker">
          <option value="El Messiri">الخط المسيري (أنيق وعصري)</option>
          <option value="Amiri">الخط الأميري (كلاسيكي وفاخر)</option>
          <option value="Almarai">خط المراعي (بسيط وواضح)</option>
          <option value="Changa">تشانغا (عصري بحروف مستديرة)</option>
          <option value="Dubai">خط دبي (رسمي وأنيق)</option>
          <option value="Harmattan">هارماتان (خفيف وسهل القراءة)</option>
          <option value="Lateef">لطيف (ناعم وانسيابي)</option>
          <option value="Lobster">لوبستر (زخرفي ولافت)</option>
          <option value="Markazi Text">خط مركزي (مثالي للقراءة الطويلة)</option>
          <option value="Mulish">موليش (نظيف وعصري)</option>
          <option value="Noto Sans Arabic">نوتو سانس العربي (واضح وسهل القراءة)</option>
          <option value="Roboto Slab">روبوتو سلاب (قوي ومستقيم)</option>
          <option value="Sanchez">سانشيز (رسمي بلمسة حديثة)</option>
          <option value="Tajawal">خط تجوال (حديث وانسيابي)</option>
          <option value="Varela Round">فارلا راوند (حواف ناعمة ومستديرة)</option>
          <option value="Yusei Magic">يوسي ماجيك (بسيط وممتع)</option>
          <option value="Zilla Slab">زيلا سلاب (معاصر بأطراف قوية)</option>
        </select>
        <input type="number" class="font-size-picker"  min="10" max="200" value="60" />
        <button class="delete-btn">حذف</button>
      </div>
    </div>

    <div class="input-wrapper">
      <input type="text" class="price-new" value="السعر الجديد" />
      <div class="custom-controls">
        <input type="color" class="color-picker" style="color: #ffb703;" />
        <select class="font-picker">
          <option value="El Messiri">الخط المسيري (أنيق وعصري)</option>
          <option value="Amiri">الخط الأميري (كلاسيكي وفاخر)</option>
          <option value="Almarai">خط المراعي (بسيط وواضح)</option>
          <option value="Changa">تشانغا (عصري بحروف مستديرة)</option>
          <option value="Dubai">خط دبي (رسمي وأنيق)</option>
          <option value="Harmattan">هارماتان (خفيف وسهل القراءة)</option>
          <option value="Lateef">لطيف (ناعم وانسيابي)</option>
          <option value="Lobster">لوبستر (زخرفي ولافت)</option>
          <option value="Markazi Text">خط مركزي (مثالي للقراءة الطويلة)</option>
          <option value="Mulish">موليش (نظيف وعصري)</option>
          <option value="Noto Sans Arabic">نوتو سانس العربي (واضح وسهل القراءة)</option>
          <option value="Roboto Slab">روبوتو سلاب (قوي ومستقيم)</option>
          <option value="Sanchez">سانشيز (رسمي بلمسة حديثة)</option>
          <option value="Tajawal">خط تجوال (حديث وانسيابي)</option>
          <option value="Varela Round">فارلا راوند (حواف ناعمة ومستديرة)</option>
          <option value="Yusei Magic">يوسي ماجيك (بسيط وممتع)</option>
          <option value="Zilla Slab">زيلا سلاب (معاصر بأطراف قوية)</option>          
        </select>
        <input type="number" class="font-size-picker"  min="10" max="200" value="200" />
        <button class="delete-btn">حذف</button>
      </div>
    </div>

  </div>

`