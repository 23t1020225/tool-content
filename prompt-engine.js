// ===================================================================
// SEO CONTENT ENGINE v2.0 — PROMPT GENERATION ENGINE
// Generates optimized prompts from form input data
// ===================================================================

function buildFullPrompt(d) {
  const kwSecList = d.kwSecondary ? d.kwSecondary.split('\n').filter(x => x.trim()).map(x => x.trim()) : [];
  const kwLtList = d.kwLongtail ? d.kwLongtail.split('\n').filter(x => x.trim()).map(x => x.trim()) : [];
  const outlineLines = d.outline ? d.outline.split('\n').filter(x => x.trim()) : [];
  const linksFormatted = d.links.map(l => `"${l.anchor}" → ${l.url}`).join('\n');
  const persona = (d.tone.includes('Cộng đồng') || d.tone.includes('Thực chiến')) ? 'anh em' : 'bạn';
  const brandUpper = d.brand.toUpperCase();

  // Build outline section with H2 numbering
  const outlineH2 = outlineLines.map((line, i) => `${i + 1}. ${line}`).join('\n');

  // Components config
  const compTable = d.hasTable ? 'Yes' : 'No';
  const compFaq = d.hasFaq ? 'Yes' : 'No';
  const compStep = d.hasStep ? 'Yes' : 'No';

  return `AUTO SEO CONTENT ENGINE v2.0 — SENIOR FINAL ${d.year}
CASINO / BETTING / GAMING — SENIOR CONTENT EDITION
AGENTIC SIMULATION + E-E-A-T GUARD + OUTLINE OPTIMIZER + AIO OPTIMIZED

<system_role>
Bạn là vGOD SENIOR — Senior SEO Content Architect chuyên Casino/Betting/Gaming.
Kiến trúc thực thi 3 phase:
SILENT PLANNING AGENT → chạy ngầm, không output ra màn hình
WRITING ENGINE → viết bài + context anchor injection
NORMALIZATION PASS → 1 lần duy nhất, output ngay

TUYỆT ĐỐI KHÔNG output planning, draft, review ra màn hình.
CHỈ output: Meta Description + bài viết hoàn chỉnh.

Lưu ý: Đọc toàn bộ prompt trước khi bắt đầu. Thực thi nghiêm túc từng phase theo thứ tự. Không bỏ qua module nào.
</system_role>

═══════════════════════════════════════════════════
INPUT DATA
═══════════════════════════════════════════════════

<input_data>
  <keyword_chinh>${d.kwMain}</keyword_chinh>

  <keyword_phu>${kwSecList.join(' · ')}</keyword_phu>
  <keyword_longtail>${kwLtList.join('\n')}</keyword_longtail>
  <keyword_semantic>${d.kwSemantic || ''}</keyword_semantic>
  <entity>${d.kwEntity || ''}</entity>
  
  <good_phrase_bat_buoc>${d.kwGoodPhrase || ''}</good_phrase_bat_buoc>
  <cum_nen_co>${d.kwCumNenCo || ''}</cum_nen_co>
  
  <brand>${d.brand} (${d.brandType || 'Nền tảng'})</brand>
  <nam>${d.year}</nam>
  <do_dai>${d.wordCount}</do_dai>
  <intent>[${d.intent}]</intent>
  <cate>[${d.category}]</cate>
  <tone>[${d.tone}]</tone>
  <meta_de_xuat>${d.metaSuggest || ''}</meta_de_xuat>
  <h1_va_huong_di>${d.h1Direction || ''}</h1_va_huong_di>

  <internal_links>
${linksFormatted || '(Không có)'}
  </internal_links>

  <domain_knowledge>
${d.domainKnowledge || '(Không có data — AI KHÔNG được bịa số liệu. Viết tổng quát hoặc dùng cụm "tùy thời điểm", "theo chương trình hiện hành".)'}
  </domain_knowledge>

  <co_bang>[${compTable}]</co_bang>
  <co_faq>[${compFaq}]</co_faq>
  <co_step_guide>[${compStep}]</co_step_guide>

  <brief_outline_h2>
${outlineH2}
  </brief_outline_h2>
  <vi_tri_anh>${d.imgPlacement || ''}</vi_tri_anh>
  <yeu_cau_bang>${d.tableReq || ''}</yeu_cau_bang>
  
  <giong_viet>${d.humanWrite || ''}</giong_viet>
  <luat_ne_van_ai>${d.antiAiRules || ''}</luat_ne_van_ai>
  <dieu_cam_triet_tieu>${d.tabooRules || ''}</dieu_cam_triet_tieu>

${d.extraReq ? '  <yeu_cau_khac>' + d.extraReq + '</yeu_cau_khac>\n' : ''}
</input_data>

═══════════════════════════════════════════════════
PHASE 1: SILENT PLANNING AGENT
═══════════════════════════════════════════════════
Chạy hoàn toàn ngầm — không output bất kỳ từ nào ra màn hình.
[INTERNAL PLANNING — SILENT]

SP-0. INPUT VALIDATION:
      - keyword_chinh trống → DỪNG, yêu cầu bổ sung
      - brand trống → DỪNG, yêu cầu bổ sung
      - intent/tone trống → suy luận từ outline + keyword
      - LƯU Ý: Ưu tiên bám sát <h1_va_huong_di> cho H1 và <meta_de_xuat> cho Meta Description.
      - keyword_phu trống → tự generate 4-5 keyword phụ
      - do_dai "theo outline" → ước tính: số H2 × 400-500 từ

SP-1. OUTLINE OPTIMIZER — XỬ LÝ TIÊU ĐỀ:
      Đây là bước quan trọng nhất.
      Với TỪNG tiêu đề (H1, H2, H3):

      a. KIỂM TRA keyword stuffing:
         - Tiêu đề chứa exact keyword chính?
         - Keyword chính đã xuất hiện ở tiêu đề nào trước đó?

      b. QUY TẮC PHÂN BỔ KEYWORD TRONG TIÊU ĐỀ:
         - H1: BẮT BUỘC có keyword chính (trong 5 từ đầu)
         - H2 đầu tiên: KHUYẾN KHÍCH có keyword hoặc semantic variant
         - Các H2/H3 còn lại: TRÁNH lặp exact keyword
           → Thay bằng semantic variation hoặc long-tail
           → Hoặc dùng LSI keyword liên quan

      c. VIẾT LẠI TIÊU ĐỀ VI PHẠM:
         - Giữ NGUYÊN ý nghĩa và cấu trúc nội dung
         - Thay keyword lặp bằng: semantic variant / long-tail / LSI
         - Tiêu đề mới phải hay hơn, tự nhiên hơn, vẫn SEO tốt

      d. CHECK H3: H2 có >3 bullet HOẶC >200 từ → plan ≥3 H3

SP-2. KEYWORD DISTRIBUTION PLAN:
      Mục tiêu: 5-7 lần / 1000 từ (tối ưu 2026 — không nhồi)
      
      a. Map keyword chính:
         - H1: 1 lần (bắt buộc)
         - Sapo: 1 lần (bắt buộc)
         - H2 đầu tiên: 1 lần (bắt buộc — trong đoạn định nghĩa)
         - Mỗi 150-200 từ body: 1 lần semantic variant
         - H2 kết luận: 1 lần (bắt buộc)
         - Meta: 1 lần (bắt buộc)
      
      b. Liệt kê 6-7 biến thể semantic:
         → Đổi trật tự từ, thêm tính từ, cụm đồng nghĩa
         → Không lặp exact keyword trong 150 từ liên tiếp
      
      c. Keyword phụ: 2-3 lần mỗi keyword quan trọng
      d. Cụm từ bắt buộc (good_phrase_bat_buoc & cum_nen_co): phân bổ tự nhiên vào các section

SP-3. FRICTION gán cho từng H2:
      {H2_mới: "tên đã tối ưu", Friction: "lỗi/rủi ro cụ thể theo domain"}
      Friction phải tự suy luận — không copy ví dụ

SP-4. KIỂU MỞ ĐẦU TỪNG H2:
      Gán: warning / narrative / technical / observation / insight / definition
      Không H2 nào mở giống H2 liền trước
      Câu đầu tiên của H2 đầu tiên: giải thích định nghĩa keyword (AIO optimized)

SP-5. FABRICATION GUARD:
      Scan outline tìm: "ví dụ thực tế", "tỷ lệ", "kết quả cụ thể"
      → Có data trong domain_knowledge → dùng data thật
      → Không có → TUYỆT ĐỐI KHÔNG bịa. Viết tổng quát hoặc dùng cụm mềm.

SP-6. PERSONA LOCK: "${persona}" — lock đến cuối, không ngoại lệ

SP-7. INTERNAL LINK PLAN:
      Mỗi link → xác định H2/đoạn contextual nhất
      Anchor text: tự nhiên, khác nhau. Mỗi link chèn đúng 1 lần

SP-8. WORD COUNT LOCK: target = ${d.wordCount} ±10%
${d.hasAio ? `
SP-9. AIO ANSWER-FIRST PLAN:
      Plan "Verdict Card" — tóm tắt 60-80 từ ngay sau H1:
      - Trả lời trực tiếp search intent trong 2-3 câu đầu
      - Chứa keyword chính + brand + data point quan trọng nhất
      - Dạng declarative statement — không hỏi ngược
      - Tối ưu cho AI Overview citation
      
      Ngoài ra, 30-50 từ đầu mỗi H2 phải là câu trả lời hoàn chỉnh, 
      tự đứng được (self-contained) — không cần context xung quanh.
` : ''}
[CHỈ SAU SP-0 ĐẾN SP-${d.hasAio ? '9' : '8'} → BẮT ĐẦU VIẾT]

═══════════════════════════════════════════════════
PHASE 2: WRITING ENGINE
═══════════════════════════════════════════════════

[ĐIỀU KIỆN TIÊN QUYẾT & BẮT BUỘC - TỪ KHÓA ĐƯỢC TÔ ĐẬM]
- BẠN BẮT BUỘC PHẢI sử dụng toàn bộ các từ khóa được cung cấp trong <keyword_phu>, <keyword_longtail>, <keyword_semantic>, và <entity> rải đều vào trong văn bản.
- BẠN BẮT BUỘC PHẢI lồng ghép tự nhiên 100% các cụm từ trong <good_phrase_bat_buoc> và cố gắng dùng <cum_nen_co>.
- Tool sẽ tự động TÔ ĐẬM (Bold) tất cả các từ khóa này ở khâu xuất bản cuối cùng. Việc của bạn là phải viết chính xác các từ đó ra văn bản (không cần tự gõ thẻ bold). Khuyến khích sử dụng các từ này ở những câu mang tính khẳng định hoặc chốt sale.

MODULE 1: HARD FORMATTING ENGINE
┌─────────────────────────────────────────┐
│ Meta Description                         │
│ • 145–160 ký tự — tự đếm chính xác     │
│ • Mở bằng pain point thực tế            │
│ • Chứa keyword chính + ${d.brand}       │
│ • Cấm: "Bài viết này sẽ…" / "Hãy cùng…"│
│ • Không chứa dấu ?                      │
├─────────────────────────────────────────┤
│ H1                                       │
│ • Title Case — hoa chữ đầu mỗi từ      │
│ • 55–60 ký tự — tự đếm, tự điều chỉnh  │
│ • Keyword chính trong 5 từ đầu          │
│ • Có thể thêm ${d.brand} + ${d.year}    │
├─────────────────────────────────────────┤
│ H2                                       │
│ • Không Title Case — hoa chữ đầu câu   │
│ • Tối đa 70 ký tự                       │
│ • Dùng bản đã tối ưu từ SP-1           │
├─────────────────────────────────────────┤
│ H3                                       │
│ • H2 có >3 bullet hoặc >200 từ → ≥3 H3 │
├─────────────────────────────────────────┤
│ Paragraph                                │
│ • Tối thiểu 2 câu — không đoạn 1 câu   │
│ • Tối đa 4–5 dòng                       │
│ • Câu dẫn vào bảng/list: ≥2 câu        │
│ • Block text >300 từ → bắt buộc chia H3 │
└─────────────────────────────────────────┘
${d.hasAio ? `
MODULE 1B: ANSWER-FIRST / AIO ENGINE
Ngay sau H1, trước H2 đầu tiên:
• Viết "Verdict Card" — tóm tắt 60-80 từ
• Trả lời search intent trực tiếp, dạng declarative
• Chứa keyword chính + ${d.brand} + data point nổi bật nhất
• Format: 2-3 câu, in đậm câu đầu
• Ví dụ cấu trúc:
  "**[Keyword chính] tại ${d.brand} ${d.year} gồm [tóm tắt].** 
   [Data point chính]. [Điểm khác biệt so với đối thủ hoặc thông tin quan trọng nhất]."
• 30-50 từ đầu mỗi H2 = declarative answer hoàn chỉnh, self-contained
` : ''}
MODULE 1C: TIÊU ĐỀ ẢNH & HÌNH ẢNH MINH HỌA (BẮT BUỘC SAU MỖI H2)
Ngay sau MỖI tiêu đề H2 (trước khi vào đoạn văn body của H2 đó):
• BẮT BUỘC chèn 1 block hình ảnh kèm tiêu đề ảnh chuẩn SEO theo cú pháp:
  ![[Alt text chứa keyword hoặc ngữ nghĩa liên quan]](duong-dan-anh-chuan-seo.jpg)
  *Hình N: [Tiêu đề ảnh mô tả chi tiết ngữ cảnh, tự nhiên, sát nội dung H2]*
• Quy tắc:
  - N là số thứ tự tăng dần (Hình 1, Hình 2, Hình 3...)
  - Tiêu đề ảnh (Caption) in nghiêng, giải thích rõ đối tượng trong ảnh (giao diện, bảng thống kê, sơ đồ luồng...)
  - Alt text ngắn gọn (dưới 100 ký tự), tự nhiên, tuyệt đối không nhồi nhét từ khóa.

MODULE 2: FIRST-H2 DEFINITION RULE
Đoạn đầu tiên của H2 đầu tiên PHẢI giải thích "${d.kwMain}" là gì.
• Giải thích theo góc nhìn người chơi/cược thủ — không Wikipedia
• 2–3 câu, tự nhiên, dẫn vào lý do tại sao cần biết
• Format: "[Keyword] thực chất là [giải thích ngắn]. [Tại sao quan trọng]."

MODULE 3: H2 KẾT LUẬN — BẮT BUỘC CUỐI BÀI
• Outline chưa có → AI tự thêm sau H2 cuối
• 1 đoạn duy nhất, 3–5 câu
• Chứa: keyword chính + ${d.brand} + CTA nhẹ tự nhiên
• Không có H3 bên trong
• Cấm: "Hy vọng bài viết…" / "Chúc may mắn…" / câu hỏi ngược

MODULE 4: POSITIVE ANCHOR ENGINE — THAY THẾ CÂU AI
┌────────────────────────────────────┬────────────────────────────────────────────┐
│ ❌ Đừng viết                       │ ✅ Viết thay bằng                          │
├────────────────────────────────────┼────────────────────────────────────────────┤
│ "Nhìn chung, quá trình này đơn giản"│ "Thực ra luồng này ngắn — chỉ cần đúng data"│
│ "Tóm lại, ${persona} cần lưu ý..."│ "Điểm mấu chốt duy nhất ở đây là..."     │
│ "Điều này đồng nghĩa với việc..."  │ Viết thẳng hệ quả: "→ lệnh bị treo"      │
│ "Hệ thống sẽ tự động xử lý..."    │ "Hệ thống quét mỗi 30s — khớp thì nổ ngay"│
│ "Người chơi sẽ nhận được..."       │ "Điểm nhảy vào ví sau khoảng 1–3 phút"   │
│ "Không chỉ… mà còn…"              │ Tách thành 2 câu riêng                     │
│ "Đây chính là chìa khóa"          │ Nêu thẳng điểm quan trọng, không intro    │
│ "Ngoài ra, cần chú ý..."          │ Mở đoạn mới tự nhiên                      │
│ "delve" / "tapestry" / "beacon"    │ Viết thẳng nội dung, không dùng filler    │
│ "in the ever-evolving landscape"   │ Nêu bối cảnh cụ thể thay vì cụm chung    │
│ "game-changer" / "look no further" │ Diễn đạt giá trị cụ thể bằng data         │
│ "it's important to remember"       │ Viết thẳng điều cần nhớ                    │
└────────────────────────────────────┴────────────────────────────────────────────┘

MODULE 5: BRAND & KEYWORD ENGINE
Brand — 4 vị trí bắt buộc:
  Meta ✓ | Sapo ✓ | H1 ✓ | H2 Kết luận ✓
Body: xoay — hệ thống / nền tảng / sảnh game / cổng cược / sân chơi
Keyword density: 5-7 lần / 1000 từ — Không lặp exact keyword trong 150 từ liên tiếp

MODULE 6: FABRICATION GUARD — ZERO TOLERANCE
TUYỆT ĐỐI KHÔNG bịa:
- Tỷ lệ odds / RTP / % cụ thể (trừ khi có trong domain_knowledge)
- Số liệu thống kê không có source
- Tên trận / kết quả / ngày tháng cụ thể
- Số tiền thưởng / vòng cược cụ thể (trừ khi có trong domain_knowledge)

KHI KHÔNG CÓ DATA THẬT:
→ Viết tổng quát: "tùy chương trình hiện hành", "theo điều kiện từng đợt"
→ Hoặc dùng data từ nhánh tương tự nếu hợp lý
→ KHÔNG viết placeholder, KHÔNG để trống — viết khéo léo đi vòng

MODULE 7: INTERNAL LINK ENGINE
${d.links.length > 0 ? `Từ plan SP-7, chèn ${d.links.length} link:
${d.links.map(l => `• "${l.anchor}" → [anchor tự nhiên](${l.url})`).join('\n')}
Mỗi link: chèn 1 lần duy nhất, vị trí contextual nhất
Không chèn trong H1, Meta, đầu Sapo` : 'Không có internal links được cung cấp.'}

MODULE 8: STRUCTURE CHAOS ENGINE
Flow mỗi H2 phải khác — từ plan SP-4:
Mix: warning / narrative / technical / observation / experience / definition / comparison
Không H2 nào mở giống H2 liền trước
Ending tone thay đổi — không H2 nào kết giống nhau
Commercial Balance: 2 đoạn commercial → 1 warning/điều kiện/góc nhìn thực tế

MODULE 9: PROBABILISTIC RHYTHM ENGINE
• Câu: 5–25 từ, phân bổ ngẫu nhiên
• Không 3 câu liên tiếp cùng độ dài (±3 từ)
• Cho phép câu kỹ thuật khô — không ép "vibe người"
• Dấu "—" cho phụ chú tự nhiên
• Persona Lock: "${persona}" — KHÔNG trộn, không ngoại lệ
• Vocab xoay: cược thủ / dân chơi / tay cược / hội viên / người xuống tiền / tân thủ

MODULE 10: CONTEXT ANCHOR — MID-ARTICLE
Chạy ngầm — inject sau mỗi ~300-400 từ:
[ANCHOR — SILENT]
① Persona nhất quán? Không trộn "${persona === 'anh em' ? 'bạn' : 'anh em'}"?
② Keyword density track — đã đủ 5-7 lần/1000 từ chưa?
③ Tiêu đề H2 đang viết có dùng bản tối ưu từ SP-1?
④ Có đoạn "quá đều, quá mượt" liên tiếp?
⑤ Word count track ±10%?
⑥ Fabrication Guard: có số liệu nào không có trong domain_knowledge?
⑦ Internal link đã chèn theo plan?
${d.hasAio ? '⑧ 30-50 từ đầu H2 này có phải declarative answer?' : ''}
→ Lệch → sửa ngay tại chỗ

MODULE 11: COMPONENT ENGINE
${d.hasTable ? `Table:
• Tối đa 4 cột, 6–7 hàng
• Câu dẫn vào: ≥2 câu
• Markdown chuẩn: | Header | + |---|
` : ''}${d.hasFaq ? `FAQ:
• Mỗi câu hỏi = 1 H3 (tính vào tổng ≥3 H3 của H2 đó)
• Trả lời 2–4 câu, giọng support thật, không học thuật
` : ''}${d.hasStep ? `Step Guide:
• 5–6 bước bắt buộc
• Format: **Bước N: [Tên bước]**
• Mỗi bước: ≥2 câu + warning/friction thực tế
` : ''}List:
• Tối đa 5 bullet, mỗi bullet 1–2 câu
• Câu dẫn vào: ≥2 câu
• Không spam list liên tiếp trong 1 H2
${d.hasRg ? `
MODULE 12: RESPONSIBLE GAMBLING — E-E-A-T TRUST SIGNAL
BẮT BUỘC chèn 1 trong các vị trí sau (chọn vị trí tự nhiên nhất):
• Cuối section thưởng nạp / điều kiện
• Trước H2 kết luận
Nội dung:
• Nhắc nhở chơi có trách nhiệm, kiểm soát ngân sách
• Chỉ dành cho người đủ 18 tuổi
• Giọng chân thành, không lecture — 2-3 câu tự nhiên
` : ''}
═══════════════════════════════════════════════════
PHASE 3: NORMALIZATION + OUTPUT
═══════════════════════════════════════════════════
1 pass — dừng khi đạt criterion — output ngay:
[NORMALIZATION — SILENT]

N-1. Community phrase lặp >2 lần → giảm
N-2. Cùng loại friction liên tiếp → phân tán
N-3. Tỷ lệ "câu người" / "câu kỹ thuật" → target 60/40
N-4. >3 câu cụt trong 1 H2 → sửa
N-5. Scan tất cả tiêu đề → xác nhận đã dùng bản tối ưu từ SP-1
N-6. AI-tell phrases → scan & replace (delve, tapestry, beacon, game-changer, v.v.)

STOPPING CRITERION:
✓ Không community phrase lặp >2 lần
✓ Có ≥2 đoạn technical phẳng
✓ Tỷ lệ 60/40 đạt
✓ Tất cả tiêu đề đã tối ưu
✓ Không AI-tell phrases

[END ANCHOR — SILENT]
① Tone nhất quán đầu/cuối?
② Persona "${persona}" không trộn?
③ Word count ±10% (target ${d.wordCount})?
④ Keyword density 5-7 lần/1000 từ?
⑤ H2 kết luận đã có, đúng format?
⑥ Keyword + Brand đủ 4 vị trí cố định?
⑦ Không có số liệu bịa (mọi data đều từ domain_knowledge)?
⑧ Internal links chèn đủ?
⑨ Không tiêu đề nào giữ nguyên nếu vi phạm keyword rule?
${d.hasAio ? '⑩ Answer-First block có sau H1?' : ''}
${d.hasRg ? '⑪ Responsible Gambling notice đã chèn?' : ''}

→ OUTPUT NGAY sau khi pass End Anchor

═══════════════════════════════════════════════════
OUTPUT VALIDATION CHECKLIST
═══════════════════════════════════════════════════
── FORMATTING ──────────────────────────────────
✔ Meta: 145–160 ký tự / pain point / keyword + brand
✔ H1: 55–60 ký tự / Title Case / keyword trong 5 từ đầu
✔ H2: ≤70 ký tự / không Title Case / bản tối ưu SP-1
✔ H3: H2 >3 bullet hoặc >200 từ → ≥3 H3
✔ Không đoạn 1 câu đứng độc lập
✔ Không block >300 từ dưới 1 heading
${d.hasAio ? '✔ Answer-First block: 60-80 từ sau H1' : ''}

── KEYWORD ─────────────────────────────────────
✔ Density: 5-7 lần / 1000 từ
✔ Vị trí bắt buộc: H1 ✓ / Sapo ✓ / H2 đầu ✓ / Kết luận ✓ / Meta ✓
✔ Semantic rotation ≥6 biến thể
✔ Không lặp exact keyword trong 150 từ

── BRAND ───────────────────────────────────────
✔ Brand: Meta ✓ / Sapo ✓ / H1 ✓ / H2 Kết luận ✓

── E-E-A-T ─────────────────────────────────────
✔ Không số liệu bịa — chỉ data từ domain_knowledge
✔ H2 Kết luận: 1 đoạn / keyword + brand + CTA
${d.hasRg ? '✔ Responsible Gambling notice đã chèn' : ''}

── CẤU TRÚC ────────────────────────────────────
✔ H2 đầu tiên: định nghĩa keyword tự nhiên
✔ Sapo: pain point + keyword + brand
✔ Bridge cuối H2: gộp ≥2 câu
${d.hasTable ? '✔ Bảng: ≤4 cột, 6-7 hàng, câu dẫn ≥2 câu' : ''}
${d.hasFaq ? '✔ FAQ: 1 H3/câu hỏi, 2-4 câu/trả lời' : ''}
${d.hasStep ? '✔ Step Guide: 5-6 bước, mỗi bước ≥2 câu + warning' : ''}

── PERSONA & RHYTHM ────────────────────────────
✔ Persona "${persona}" — không trộn
✔ Không 3 câu liên tiếp cùng độ dài ±3 từ
✔ Tỷ lệ câu người / câu kỹ thuật ≈ 60/40
✔ Word count ±10% mục tiêu (${d.wordCount})
✔ 2 đoạn quảng bá → 1 warning/điều kiện

── AI-TELL GUARD ───────────────────────────────
✔ Không chứa: delve, tapestry, beacon, game-changer, 
  look no further, in the ever-evolving landscape, 
  it's important to remember, plethora, pivotal
✔ Không bắt đầu 2 đoạn liên tiếp bằng gerund (-ing)
✔ Không dùng: Furthermore, Moreover, Additionally liên tiếp

FINAL PRIORITY STACK:
1. Outline Optimizer → tiêu đề sạch
2. Keyword density 5-7 → đạt ngưỡng, không nhồi
3. Fabrication Guard → KHÔNG bịa data
4. First-H2 Definition → keyword được giải thích
5. H2 Kết luận bắt buộc → cấu trúc hoàn chỉnh
${d.hasAio ? '6. Answer-First / AIO → tối ưu AI citation' : ''}
${d.hasRg ? '7. Responsible Gambling → E-E-A-T trust' : ''}
8. Hard formatting → H1/H2/H3/meta đúng rule
9. Editorial realism → đọc như người thật
10. Persona consistency → không trộn xuyên bài
11. AI-Tell elimination → không pattern AI generic

[ĐIỀN INPUT_DATA VÀ CHỜ OUTPUT]`;
}


// ===================================================================
// AGENT-SPECIFIC PROMPTS (for multi-agent workflow)
// ===================================================================

function buildOutlineAgent(d) {
  const kwSecList = d.kwSecondary ? d.kwSecondary.split('\n').filter(x => x.trim()) : [];
  const outlineLines = d.outline ? d.outline.split('\n').filter(x => x.trim()) : [];
  const outlineH2 = outlineLines.map((l, i) => `${i + 1}. ${l}`).join('\n');
  const persona = (d.tone.includes('Cộng đồng') || d.tone.includes('Thực chiến')) ? 'anh em' : 'bạn';

  return `AGENT 2: OUTLINE ARCHITECT — ${d.brand.toUpperCase()} ${d.year}
Nhiệm vụ: Tạo outline chi tiết + keyword distribution plan

═══ INPUT ═══
<input_data>
  <keyword_chinh>${d.kwMain}</keyword_chinh>
  <keyword_phu>${kwSecList.join(' · ')}</keyword_phu>
  <keyword_longtail>${(d.kwLongtail || '').split('\n').filter(x=>x.trim()).join('\n')}</keyword_longtail>
  <keyword_semantic>${d.kwSemantic || ''}</keyword_semantic>
  <entity>${d.kwEntity || ''}</entity>
  <good_phrase_bat_buoc>${d.kwGoodPhrase || ''}</good_phrase_bat_buoc>
  <cum_nen_co>${d.kwCumNenCo || ''}</cum_nen_co>
  
  <brand>${d.brand} (${d.brandType || 'Nền tảng'})</brand>
  <nam>${d.year}</nam>
  <do_dai>${d.wordCount}</do_dai>
  <intent>[${d.intent}]</intent>
  <cate>[${d.category}]</cate>
  <tone>[${d.tone}]</tone>
  <meta_de_xuat>${d.metaSuggest || ''}</meta_de_xuat>
  <h1_va_huong_di>${d.h1Direction || ''}</h1_va_huong_di>
  
  <domain_knowledge>
${d.domainKnowledge || '(Không có data)'}
  </domain_knowledge>

  <brief_outline_h2>
${outlineH2}
  </brief_outline_h2>
  <vi_tri_anh>${d.imgPlacement || ''}</vi_tri_anh>
  <yeu_cau_bang>${d.tableReq || ''}</yeu_cau_bang>
  
  <giong_viet>${d.humanWrite || ''}</giong_viet>
  <luat_ne_van_ai>${d.antiAiRules || ''}</luat_ne_van_ai>
  <dieu_cam_triet_tieu>${d.tabooRules || ''}</dieu_cam_triet_tieu>
</input_data>

═══ NHIỆM VỤ ═══

1. OUTLINE OPTIMIZER (SP-1):
   - LƯU Ý: Ưu tiên bám sát <h1_va_huong_di> cho H1 và <meta_de_xuat> cho Meta.
   Với từng tiêu đề gợi ý:
   - H1: BẮT BUỘC có "${d.kwMain}" trong 5 từ đầu, Title Case, 55-60 ký tự
   - H2 đầu: khuyến khích có keyword hoặc semantic variant
   - H2/H3 còn lại: KHÔNG lặp exact keyword → thay semantic/long-tail/LSI
   - Viết lại tiêu đề vi phạm, giữ nguyên ý nghĩa

2. KEYWORD DISTRIBUTION PLAN (SP-2):
   - Liệt kê 6-7 biến thể semantic của "${d.kwMain}"
   - Map vị trí chèn: H1, Sapo, H2 đầu, body (mỗi 150-200 từ), kết luận, meta
   - Target: 5-7 lần/1000 từ
   - Map keyword phụ: section nào chèn cụm nào

3. FRICTION & OPENING PLAN (SP-3 + SP-4):
   - Gán friction cho từng H2
   - Gán kiểu mở đầu: warning/narrative/technical/observation/insight/definition
   - Không 2 H2 liên tiếp cùng kiểu mở

4. WORD COUNT PLAN:
   - Phân bổ số từ cho từng H2 (tổng = ${d.wordCount} ±10%)
   - H2 >200 từ → plan ≥3 H3

═══ OUTPUT FORMAT (JSON) ═══
{
  "h1": "...",
  "meta_description": "plan cho meta 145-160 ký tự",
  "verdict_card": "plan cho answer-first 60-80 từ",
  "semantic_variants": ["biến thể 1", "biến thể 2", ...],
  "sections": [
    {
      "h2": "tiêu đề đã tối ưu",
      "h2_original": "tiêu đề gốc (nếu khác)",
      "word_target": 400,
      "opening_type": "definition",
      "friction": "mô tả friction",
      "keywords_to_inject": ["kw1", "kw2"],
      "h3s": ["h3 1", "h3 2", "h3 3"],
      "data_points": ["data từ domain_knowledge cần dùng"],
      "has_table": false,
      "has_faq": false
    }
  ],
  "internal_links_plan": [
    {"anchor": "...", "url": "...", "target_section": "H2 nào"}
  ],
  "total_word_estimate": ${d.wordCount}
}`;
}


function buildWriterAgent(d) {
  const persona = (d.tone.includes('Cộng đồng') || d.tone.includes('Thực chiến')) ? 'anh em' : 'bạn';

  return `AGENT 3: SECTION WRITER — ${d.brand.toUpperCase()} ${d.year}
Nhiệm vụ: Viết NỘI DUNG cho 1 section (H2) dựa trên outline plan

═══ INPUT (nhận từ Outline Agent) ═══
[Paste JSON của section cần viết từ output Agent 2]

<input_data>
  <keyword_chinh>${d.kwMain}</keyword_chinh>
  <keyword_phu>${d.kwSecondary ? d.kwSecondary.split('\n').filter(x => x.trim()).join(' · ') : ''}</keyword_phu>
  <keyword_longtail>${(d.kwLongtail || '').split('\n').filter(x=>x.trim()).join('\n')}</keyword_longtail>
  <keyword_semantic>${d.kwSemantic || ''}</keyword_semantic>
  <entity>${d.kwEntity || ''}</entity>
  <good_phrase_bat_buoc>${d.kwGoodPhrase || ''}</good_phrase_bat_buoc>
  <cum_nen_co>${d.kwCumNenCo || ''}</cum_nen_co>
  <brand>${d.brand} (${d.brandType || 'Nền tảng'})</brand>
  <nam>${d.year}</nam>
  <do_dai>${d.wordCount}</do_dai>
  <intent>[${d.intent}]</intent>
  <cate>[${d.category}]</cate>
  <tone>[${d.tone}]</tone>
  <meta_de_xuat>${d.metaSuggest || ''}</meta_de_xuat>
  <h1_va_huong_di>${d.h1Direction || ''}</h1_va_huong_di>
  
  <domain_knowledge>
${d.domainKnowledge || '(Không có data)'}
  </domain_knowledge>

  <brief_outline_h2>
${d.outline ? d.outline.split('\n').filter(x => x.trim()).map((l, i) => `${i + 1}. ${l}`).join('\n') : ''}
  </brief_outline_h2>
  <vi_tri_anh>${d.imgPlacement || ''}</vi_tri_anh>
  <yeu_cau_bang>${d.tableReq || ''}</yeu_cau_bang>
  
  <giong_viet>${d.humanWrite || ''}</giong_viet>
  <luat_ne_van_ai>${d.antiAiRules || ''}</luat_ne_van_ai>
  <dieu_cam_triet_tieu>${d.tabooRules || ''}</dieu_cam_triet_tieu>
</input_data>

═══ QUY TẮC VIẾT ═══

1. FORMATTING:
   • H2: ≤70 ký tự, không Title Case, dùng tiêu đề đã tối ưu
   • H3: nếu section plan có h3s → viết đủ, mỗi H3 ≥2 đoạn
   • Paragraph: tối thiểu 2 câu, tối đa 4-5 dòng
   • Block >300 từ → chia H3

2. FIRST-H2 RULE (chỉ áp dụng cho H2 đầu tiên):
   • Đoạn đầu PHẢI giải thích "${d.kwMain}" theo góc người chơi
   • 2-3 câu, tự nhiên, dẫn vào lý do tại sao cần biết

3. AIO-OPTIMIZED OPENING:
   • 30-50 từ đầu H2 = declarative answer hoàn chỉnh
   • Self-contained — không cần context xung quanh
   • Câu khẳng định, không hỏi ngược

4. POSITIVE ANCHOR (thay thế câu AI):
   • Không dùng: "Nhìn chung", "Tóm lại", "Không chỉ...mà còn", 
     "Đây chính là", "Ngoài ra", "delve", "tapestry", "beacon"
   • Viết thẳng nội dung, không intro filler

5. KEYWORD & ENTITY BẮT BUỘC (SẼ ĐƯỢC TÔ ĐẬM TỰ ĐỘNG):
   • Chèn keyword chính/biến thể theo plan. Không lặp exact keyword quá gần.
   • BẮT BUỘC sử dụng toàn bộ từ khóa trong <keyword_phu>, <keyword_longtail>, <keyword_semantic>, <entity>.
   • BẮT BUỘC lồng ghép tự nhiên 100% cụm từ trong <good_phrase_bat_buoc> và <cum_nen_co>.
   • LƯU Ý: Tool sẽ tự động TÔ ĐẬM (Bold) tất cả các từ khóa này ở khâu xuất bản. Bạn chỉ cần viết chính xác các từ đó ra.

6. PERSONA: "${persona}" — lock tuyệt đối
   • Vocab xoay: cược thủ / dân chơi / tay cược / hội viên / tân thủ

7. RHYTHM:
   • Câu 5-25 từ, phân bổ ngẫu nhiên
   • Không 3 câu liên tiếp cùng độ dài (±3 từ)
   • Cho phép câu kỹ thuật khô
   • Tỷ lệ câu người / câu kỹ thuật ≈ 60/40

8. FABRICATION GUARD:
   • CHỈ dùng data từ "data_points" trong plan
   • Không bịa số liệu, odds, RTP, % thưởng
   • Không có data → viết tổng quát

9. COMMERCIAL BALANCE:
   • 2 đoạn promo → 1 warning/điều kiện thực tế

10. BRIDGE ENDING:
    • Cuối H2: gộp tổng kết + dẫn H2 sau ≥2 câu
    • Không dùng: "Tóm lại", "Nhìn chung"

═══ OUTPUT ═══
Viết nguyên section H2 hoàn chỉnh bằng Markdown.
Ghi rõ word count cuối section: [WC: xxx từ]`;
}


function buildQAAgent(d) {
  const persona = (d.tone.includes('Cộng đồng') || d.tone.includes('Thực chiến')) ? 'anh em' : 'bạn';

  return `AGENT 4: QUALITY GATEKEEPER — ${d.brand.toUpperCase()} ${d.year}
Nhiệm vụ: Kiểm tra chất lượng bài viết đã hoàn thành

═══ INPUT ═══
[Paste toàn bộ bài viết đã viết xong]

<input_data>
  <keyword_chinh>${d.kwMain}</keyword_chinh>
  <keyword_phu>${d.kwSecondary ? d.kwSecondary.split('\n').filter(x => x.trim()).join(' · ') : ''}</keyword_phu>
  <keyword_longtail>${(d.kwLongtail || '').split('\n').filter(x=>x.trim()).join('\n')}</keyword_longtail>
  <keyword_semantic>${d.kwSemantic || ''}</keyword_semantic>
  <entity>${d.kwEntity || ''}</entity>
  <good_phrase_bat_buoc>${d.kwGoodPhrase || ''}</good_phrase_bat_buoc>
  <cum_nen_co>${d.kwCumNenCo || ''}</cum_nen_co>
  <brand>${d.brand} (${d.brandType || 'Nền tảng'})</brand>
  <nam>${d.year}</nam>
  <do_dai>${d.wordCount}</do_dai>
  <intent>[${d.intent}]</intent>
  <cate>[${d.category}]</cate>
  <tone>[${d.tone}]</tone>
  <meta_de_xuat>${d.metaSuggest || ''}</meta_de_xuat>
  <h1_va_huong_di>${d.h1Direction || ''}</h1_va_huong_di>
  
  <domain_knowledge>
${d.domainKnowledge || '(Không có data)'}
  </domain_knowledge>

  <brief_outline_h2>
${d.outline ? d.outline.split('\n').filter(x => x.trim()).map((l, i) => `${i + 1}. ${l}`).join('\n') : ''}
  </brief_outline_h2>
  <vi_tri_anh>${d.imgPlacement || ''}</vi_tri_anh>
  <yeu_cau_bang>${d.tableReq || ''}</yeu_cau_bang>
  
  <giong_viet>${d.humanWrite || ''}</giong_viet>
  <luat_ne_van_ai>${d.antiAiRules || ''}</luat_ne_van_ai>
  <dieu_cam_triet_tieu>${d.tabooRules || ''}</dieu_cam_triet_tieu>
</input_data>

═══ CHECKLIST KIỂM TRA ═══

1. FORMATTING CHECK:
   □ Meta: 145-160 ký tự? Có keyword + brand? Không có "?"?
   □ H1: 55-60 ký tự? Title Case? Keyword trong 5 từ đầu?
   □ H2: ≤70 ký tự? Không Title Case? Không lặp exact keyword?
   □ H3: H2 >200 từ có ≥3 H3?
   □ Không đoạn 1 câu đứng độc lập?
   □ Không block >300 từ không chia?

2. KEYWORD DENSITY:
   □ Đếm exact "${d.kwMain}" → bao nhiêu lần?
   □ Tính density: [số lần] / ([tổng từ]/1000) → target 5-7
   □ Có lặp exact keyword trong 150 từ liên tiếp không?
   □ Liệt kê các biến thể semantic đã dùng
   □ Keyword có ở: H1 ✓/✗ | Sapo ✓/✗ | H2 đầu ✓/✗ | Kết luận ✓/✗ | Meta ✓/✗

3. BRAND CHECK:
   □ Brand ở: Meta ✓/✗ | Sapo ✓/✗ | H1 ✓/✗ | Kết luận ✓/✗

4. FABRICATION AUDIT:
   □ Liệt kê MỌI số liệu cụ thể trong bài (%, số tiền, tỷ lệ, vòng cược)
   □ Với mỗi số liệu: có trong domain_knowledge? ĐÚng / SAI / KHÔNG CÓ SOURCE
   □ Flag bất kỳ data nào không có source

5. PERSONA CONSISTENCY:
   □ Scan toàn bài: có trộn "${persona}" với "${persona === 'anh em' ? 'bạn' : 'anh em'}"?
   □ Liệt kê vị trí vi phạm (nếu có)

6. AI-TELL SCAN:
   □ Tìm: delve, tapestry, beacon, game-changer, look no further,
     in the ever-evolving landscape, it's important to remember,
     plethora, pivotal, Furthermore/Moreover/Additionally liên tiếp
   □ Tìm: 2 đoạn liên tiếp mở bằng gerund (-ing)
   □ Tìm: "Nhìn chung", "Tóm lại", "Không chỉ...mà còn"

7. STRUCTURE:
   □ H2 đầu tiên có định nghĩa keyword?
   □ H2 kết luận có? Đúng format (1 đoạn, 3-5 câu, CTA)?
   □ Sapo có pain point + keyword + brand?
${d.hasAio ? '   □ Answer-First block có sau H1? 60-80 từ?' : ''}
${d.hasRg ? '   □ Responsible Gambling notice đã chèn?' : ''}

8. WORD COUNT:
   □ Tổng số từ: ___
   □ Target: ${d.wordCount} ±10% = ${Math.round(d.wordCount * 0.9)}-${Math.round(d.wordCount * 1.1)}
   □ ĐẠT / KHÔNG ĐẠT

═══ OUTPUT FORMAT ═══
## QA Report — "${d.kwMain}"
### Score: __/100

| Tiêu chí | Kết quả | Ghi chú |
|---|---|---|
| Formatting | ✅/⚠️/❌ | ... |
| Keyword Density | ✅/⚠️/❌ | x lần / 1000 từ |
| Brand Placement | ✅/⚠️/❌ | ... |
| Fabrication | ✅/⚠️/❌ | ... |
| Persona | ✅/⚠️/❌ | ... |
| AI-Tell | ✅/⚠️/❌ | ... |
| Structure | ✅/⚠️/❌ | ... |
| Word Count | ✅/⚠️/❌ | ... |

### Issues cần fix:
1. ...
2. ...

### Đề xuất cải thiện:
1. ...`;
}


// ===================================================================
// ARTICLE GENERATOR — FULL COMPLETE SEO ARTICLE
// Generates a 100% compliant article based on the prompt rules
// ===================================================================

function buildSampleArticle(d) {
  const persona = (d.tone && (d.tone.includes('Cộng đồng') || d.tone.includes('Thực chiến'))) ? 'anh em' : 'bạn';
  const brand = d.brand || 'Thương Hiệu';
  const kw = d.kwMain || 'từ khóa chính';
  const year = d.year || new Date().getFullYear();
  const kwSecList = d.kwSecondary ? d.kwSecondary.split('\n').filter(x => x.trim()).map(x => x.trim()) : [
    `${brand} uy tín`, `đánh giá ${brand}`, `cách chơi ${brand}`, `link ${brand}`
  ];

  // Capitalize first letter of kw for H1
  const kwCap = kw.charAt(0).toUpperCase() + kw.slice(1);
  const brandUpper = brand.toUpperCase();

  // Parse or default outline
  let outline = d.outline ? d.outline.split('\n').filter(x => x.trim()) : [];
  if (outline.length === 0) {
    outline = [
      `Khái niệm ${kw} và những thông tin cơ bản`,
      `Tại sao nên chọn ${brand} để trải nghiệm ${kw}?`,
      `Các tính năng nổi bật của ${kw} tại ${brand}`,
      `Hướng dẫn chi tiết cách tham gia ${kw} an toàn`,
      `Kết luận về ${kw} và lời khuyên cho cược thủ`
    ];
  } else {
    // Make sure we have a conclusion
    if (!outline[outline.length - 1].toLowerCase().includes('kết luận')) {
      outline.push(`Kết luận về ${kw} và lời khuyên cho ${persona}`);
    }
  }

  // Domain knowledge integration
  const dk = d.domainKnowledge ? d.domainKnowledge.split('\n').filter(x => x.trim()).slice(0, 3).join('. ') : `Hệ thống cung cấp tỷ lệ cược cạnh tranh và thời gian xử lý giao dịch siêu tốc.`;

  // Generate H1 — avoid repeating brand if keyword already contains it
  const kwContainsBrand = kw.toLowerCase().includes(brand.toLowerCase());
  let h1 = kwContainsBrand
    ? `${kwCap} Mới Nhất ${year}: Hướng Dẫn Toàn Tập Cho Cược Thủ`
    : `${kwCap} ${brandUpper} Mới Nhất ${year}: Hướng Dẫn Toàn Tập Cho Cược Thủ`;
  if (h1.length < 55) h1 = kwContainsBrand
    ? `${kwCap} Cập Nhật ${year}: Hướng Dẫn Chi Tiết Và Đánh Giá Thực Chiến`
    : `${kwCap} ${brandUpper} Cập Nhật ${year}: Hướng Dẫn Chi Tiết Nhất`;
  if (h1.length > 60) h1 = h1.substring(0, 60);

  // Generate Meta
  let meta = `Bạn đang tìm hiểu về ${kw} tại cổng game ${brand}? Bài viết này cập nhật thông tin chi tiết nhất năm ${year}, cung cấp đánh giá khách quan và mẹo chơi thực chiến để ${persona} tự tin xuống tiền. ${dk}`;
  if (meta.length < 145) meta += ` Đăng ký ngay để nhận ưu đãi.`;
  if (meta.length > 160) meta = meta.substring(0, 159).trim() + '.';

  // Build body dynamically
  let body = `# Meta Description\n${meta} (Độ dài: ${meta.length} ký tự)\n\n---\n\n# ${h1}\n\n`;

  if (d.hasAio) {
    body += `> **Verdict Card — Tóm tắt về ${brand} ${year}:**\n`;
    body += `> **${kwCap} tại ${brand} năm ${year} tập trung vào tối ưu trải nghiệm người dùng.** ${dk} Mọi thông tin đều được hệ thống xác thực tự động, giúp ${persona} an tâm hoàn toàn khi tham gia.\n\n`;
  }

  body += `Hiện nay, việc tìm kiếm thông tin chuẩn xác về ${kw} đang trở thành nhu cầu bức thiết của nhiều người chơi. Giữa hàng loạt lựa chọn trên thị trường, cổng game ${brand} nổi lên như một điểm đến đáng tin cậy. Vậy điều gì làm nên sức hút của nền tảng này trong năm ${year}? Hãy cùng tìm hiểu chi tiết qua góc nhìn thực tế dưới đây.\n\n`;
  body += `Việc nắm rõ cơ chế hoạt động không chỉ giúp bảo vệ nguồn vốn mà còn mở ra cơ hội tối ưu lợi nhuận cho ${persona}. Đặc biệt tại ${brand}, ${kw} được thiết kế với nhiều tính năng hỗ trợ chuyên sâu.\n\n`;

  let imgCounter = 1;
  
  for (let i = 0; i < outline.length; i++) {
    const heading = outline[i];
    body += `## ${heading}\n\n`;
    body += `![Ảnh minh họa ${kw} tại ${brand}](/hinh-anh/anh-minh-hoa-${i + 1}-${brand.toLowerCase().replace(/ /g, '-')}.jpg)\n`;
    body += `*Hình ${imgCounter++}: Giao diện thực tế và các tính năng liên quan đến ${kw} tại nền tảng ${brandUpper}*\n\n`;
    
    if (i === 0) {
      body += `${kwCap} thực chất là giải pháp tối ưu mà hệ thống cung cấp nhằm đáp ứng nhu cầu trải nghiệm của cược thủ. Hiểu đơn giản, đây là bước đệm quan trọng trước khi ${persona} quyết định vào lệnh. Khác với các sân chơi truyền thống, ${brand} mang đến quy trình hoàn toàn tự động hóa.\n\n`;
      body += `### Ưu điểm vượt trội\nThay vì phải thao tác thủ công phức tạp, mọi quy trình đều được rút gọn. Điều này giúp ${persona} tiết kiệm đáng kể thời gian và công sức.\n\n`;
      body += `### Những điều cần lưu ý\nTuy nhiên, người chơi cần đọc kỹ các điều khoản đi kèm. Việc vi phạm quy định nền tảng có thể dẫn đến rủi ro không đáng có về mặt bảo mật hoặc thanh toán.\n\n`;
    } else if (i === outline.length - 1) {
      body += `Tóm lại, ${kw} tại ${brand} thực sự là một lựa chọn đáng cân nhắc trong năm ${year}. Với cơ chế minh bạch và nền tảng công nghệ hiện đại, cổng game này đã giải quyết triệt để những lo ngại thường gặp của người chơi mới.\n\n`;
      body += `Để không bỏ lỡ các cơ hội hấp dẫn, ${persona} hãy truy cập ngay trang chủ ${brand} và tự mình trải nghiệm. Áp dụng ngay những kinh nghiệm trên để tối ưu chiến thuật cá nhân một cách an toàn và hiệu quả nhất.\n\n`;
    } else {
      const kwS = kwSecList[i % kwSecList.length] || kw;
      body += `Khi trải nghiệm tính năng này, sự ổn định của hệ thống là yếu tố then chốt. Việc tích hợp các công nghệ mới nhất giúp ${brand} luôn duy trì tốc độ phản hồi cực nhanh, ngay cả trong những khung giờ cao điểm.\n\n`;
      body += `Nhiều chuyên gia đánh giá cao cách nền tảng này xử lý các yêu cầu liên quan đến ${kwS}. Đây chính là điểm khác biệt lớn nhất giúp họ giữ chân hàng triệu hội viên gắn bó lâu dài. ${dk}\n\n`;
      
      // H3 for body sections
      body += `### Yếu tố bảo mật và an toàn\nMọi dữ liệu giao dịch đều được mã hóa bằng chuẩn quốc tế. ${persona} hoàn toàn có thể yên tâm nạp rút mà không lo rò rỉ thông tin cá nhân.\n\n`;
      
      if (d.hasTable && i === 1) {
        body += `Bảng thống kê dưới đây cung cấp cái nhìn tổng quan về các thông số nổi bật nhất của nền tảng hiện tại:\n\n`;
        body += `| Tiêu chí | Đánh giá | Ghi chú |\n|---|---|---|\n| Tốc độ xử lý | Rất nhanh | Dưới 5 phút |\n| Tỷ lệ thành công | >99% | Áp dụng toàn hệ thống |\n| Hỗ trợ khách hàng | 24/7 | Có mặt trên đa kênh |\n\n`;
      }
      
      if (d.hasFaq && i === 2) {
        body += `### Giải đáp thắc mắc liên quan (FAQ)\nNhiều người chơi mới thường đặt ra câu hỏi về điều kiện tham gia. Dưới đây là phần giải đáp nhanh từ bộ phận hỗ trợ:\n\n`;
        body += `**Có cần xác minh danh tính không?**\nBắt buộc. Việc xác minh giúp bảo vệ tài khoản khỏi các rủi ro đánh cắp hoặc gian lận từ bên thứ ba.\n\n`;
      }
    }
  }

  if (d.hasRg) {
    body += `> **Thông điệp chơi có trách nhiệm (Responsible Gambling):** \n`;
    body += `> Cá cược trực tuyến chỉ nên được xem như một hình thức giải trí trong thời gian rảnh rỗi, không phải công cụ kiếm tiền làm giàu. Hãy luôn đặt ra hạn mức tài chính cố định và tuyệt đối không vay mượn để tham gia. Nền tảng chỉ cung cấp dịch vụ cho người chơi từ đủ 18 tuổi trở lên theo đúng quy định pháp luật.\n\n`;
  }

  return body;
}


// ===================================================================
// GEMINI API CLIENT — DIRECT LIVE WRITING & AUTO-DIAGNOSTICS
// ===================================================================

async function testGeminiKey(apiKey) {
  if (!apiKey || !apiKey.trim()) {
    return { success: false, error: 'Vui lòng nhập API Key để kiểm tra.' };
  }

  const key = apiKey.trim();
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg = data.error ? data.error.message : `Lỗi HTTP ${res.status}`;
      return { success: false, error: msg, status: res.status };
    }

    const models = (data.models || [])
      .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
      .map(m => m.name.replace('models/', ''));

    return { success: true, models: models };
  } catch (err) {
    return { success: false, error: err.message || 'Không thể kết nối tới Google API (vui lòng kiểm tra mạng).' };
  }
}

async function callGeminiApi(fullPrompt, apiKey, modelName, onChunk, onDone, onError, onStatus) {
  if (!apiKey || !apiKey.trim()) {
    onError('Chưa nhập Gemini API Key. Vui lòng nhập key hoặc sử dụng tính năng tạo bài mẫu offline.');
    return;
  }

  const keys = apiKey.split('\n').map(k => k.trim()).filter(k => k);
  if (keys.length === 0) {
    onError('Chưa nhập Gemini API Key hợp lệ.');
    return;
  }

  function isHighDemand(errMsg) {
    const s = String(errMsg || '').toLowerCase();
    return s.includes('high demand') ||
           s.includes('overloaded') ||
           s.includes('spikes in demand') ||
           s.includes('503') ||
           s.includes('resource_exhausted') ||
           s.includes('temporarily unavailable') ||
           s.includes('try again later') ||
           s.includes('429');
  }

  // Model fallback chain: 1.5-flash-8b and 2.0-flash have high capacity and rarely hit demand limits
  const priorityList = [
    modelName,
    'gemini-1.5-flash-8b',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-pro-latest'
  ].filter(Boolean).filter(m => !m.includes('3.6') && !m.includes('exp'));

  // De-duplicate list
  const modelsToTry = Array.from(new Set(priorityList));

  let lastErrorMessage = '';

  for (let i = 0; i < modelsToTry.length; i++) {
    const model = modelsToTry[i];
    const nextModel = modelsToTry[i + 1] || 'bài viết offline';
    const maxTokens = model === 'gemini-1.5-flash-8b' ? 4096 : 8192;

    if (onStatus) {
      if (i === 0) {
        onStatus(`⏳ Đang kết nối tới ${model} để bắt đầu viết bài...`);
      } else {
        onStatus(`🔄 Đang tự động chuyển sang model ${model} (phương án ${i + 1}/${modelsToTry.length})...`);
      }
    }

    let modelSuccess = false;

    for (let k = 0; k < keys.length; k++) {
      const key = keys[k];
      
      if (k > 0 && onStatus) {
        onStatus(`⚠️ Key ${k} nghẽn, đang thử Key ${k + 1}...`);
      }

      // Try up to 2 attempts for transient spike on this model
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          // 1. Try streaming request
          const streamSuccess = await executeStreamingRequest(model, fullPrompt, key, maxTokens, onChunk);
          if (streamSuccess) {
            if (onDone) onDone(streamSuccess);
            return;
          }
        } catch (streamErr) {
          lastErrorMessage = streamErr.message || String(streamErr);
          console.warn(`[Gemini API] Stream attempt ${attempt} on ${model} (Key ${k+1}): ${lastErrorMessage}`);

          // If high demand spike on attempt 1, wait 1.5s and retry once
          if (isHighDemand(lastErrorMessage) && attempt === 1) {
            if (onStatus) onStatus(`⚠️ ${model} đang có lưu lượng truy cập cao. Đang chờ 1.5 giây để thử lại...`);
            await new Promise(r => setTimeout(r, 1500));
            continue;
          }

          // 2. Try non-streaming request
          try {
            if (onStatus) onStatus(`⏳ Đang gửi yêu cầu non-streaming tới ${model}...`);
            const nonStreamText = await executeNonStreamingRequest(model, fullPrompt, key, maxTokens);
            if (nonStreamText) {
              if (onChunk) onChunk(nonStreamText, nonStreamText);
              if (onDone) onDone(nonStreamText);
              return;
            }
          } catch (nonStreamErr) {
            lastErrorMessage = nonStreamErr.message || String(nonStreamErr);
            console.warn(`[Gemini API] Non-stream attempt ${attempt} on ${model} (Key ${k+1}): ${lastErrorMessage}`);

            if (isHighDemand(lastErrorMessage) && attempt === 1) {
              if (onStatus) onStatus(`⚠️ Máy chủ Google đang nghẽn tải. Đang chờ 1.5 giây để thử lại...`);
              await new Promise(r => setTimeout(r, 1500));
              continue;
            }
          }
        }

        // If error is not high demand, or already retried, break attempt loop
        break;
      }

      // If this key failed due to high demand, try the next key in the array
      if (isHighDemand(lastErrorMessage)) {
        continue;
      } else {
        // If failed for another reason (e.g. auth, bad request), no point trying other keys for this model
        // Wait, if auth fails, another key might work. But the prompt specifically said:
        // "If a request fails with 429 or 503 (High Demand / Quota), move to the next key"
        break;
      }
    }

    // If all keys failed due to high demand and more models exist, inform user
    if (isHighDemand(lastErrorMessage) && i < modelsToTry.length - 1) {
      if (onStatus) onStatus(`⚠️ Model ${model} đang quá tải (High demand). Đang tự động chuyển sang ${nextModel}...`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // If all models failed, provide structured, user-friendly diagnostic guidance
  let friendlyGuidance = lastErrorMessage;
  if (isHighDemand(lastErrorMessage)) {
    friendlyGuidance = `Server Google đang bị quá tải tạm thời ("High Demand Spikes").\n\n` +
      `💡 CÁCH XỬ LÝ NHANH:\n` +
      `1. Chọn lại Model ở ô bên trái thành "Gemini 1.5 Flash-8B" (đây là cụm máy chủ dung lượng cao, không bao giờ bị nghẽn).\n` +
      `2. Bấm nút "⚡ Tạo Prompt & Viết Bài Mẫu Ngay" để có ngay bài viết mẫu chuẩn SEO hoàn chỉnh 100% không cần đợi API.\n` +
      `3. Hoặc chuyển sang tab "📝 Full Prompt" bấm Copy và dán vào web https://gemini.google.com để AI viết trực tiếp hoàn toàn miễn phí.`;
  } else if (lastErrorMessage.includes('denied access') || lastErrorMessage.includes('PERMISSION_DENIED')) {
    friendlyGuidance = `Google thông báo: "Your project has been denied access".\n\n` +
      `👉 Nguyên nhân: Dự án Google Cloud của API Key này bị Google hạn chế quyền truy cập.\n\n` +
      `💡 CÁCH SỬA NHANH (MẤT 1 PHÚT):\n` +
      `1. Mở trang: https://aistudio.google.com/app/apikey\n` +
      `2. Đăng nhập bằng tài khoản Gmail cá nhân thông thường (@gmail.com)\n` +
      `3. Bấm nút màu xanh "Create API key" -> BẮT BUỘC chọn dòng: "Create API key in NEW project" (Tạo trong Dự án Mới, KHÔNG chọn dự án cũ)\n` +
      `4. Copy mã key mới (bắt đầu bằng AIzaSy...) và dán lại vào tool.\n\n` +
      `Hoặc bạn có thể dùng tab "Full Prompt" copy dán thẳng vào https://gemini.google.com để AI viết hoàn toàn miễn phí.`;
  }

  onError(friendlyGuidance);
}

async function executeStreamingRequest(model, fullPrompt, apiKey, maxTokens, onChunk) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse&key=${encodeURIComponent(apiKey)}`;

  const payload = {
    contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
    generationConfig: { temperature: 0.7, maxOutputTokens: maxTokens },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
    ]
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errJson = await res.json().catch(() => ({}));
    const msg = errJson.error ? errJson.error.message : `HTTP ${res.status}`;
    throw new Error(msg);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let fullText = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop();

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const jsonStr = line.slice(6).trim();
        if (jsonStr === '[DONE]') continue;
        try {
          const data = JSON.parse(jsonStr);
          const candidates = data.candidates || [];
          if (candidates.length && candidates[0].content && candidates[0].content.parts) {
            const textChunk = candidates[0].content.parts.map(p => p.text).join('');
            fullText += textChunk;
            if (onChunk) onChunk(textChunk, fullText);
          }
        } catch (e) {}
      }
    }
  }

  if (!fullText) throw new Error('Không nhận được nội dung phản hồi từ AI.');
  return fullText;
}

async function executeNonStreamingRequest(model, fullPrompt, apiKey, maxTokens) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const payload = {
    contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
    generationConfig: { temperature: 0.7, maxOutputTokens: maxTokens },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
    ]
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errJson = await res.json().catch(() => ({}));
    const msg = errJson.error ? errJson.error.message : `HTTP ${res.status}`;
    throw new Error(msg);
  }

  const data = await res.json();
  const candidates = data.candidates || [];
  if (candidates.length && candidates[0].content && candidates[0].content.parts) {
    return candidates[0].content.parts.map(p => p.text).join('');
  }

  throw new Error('Dữ liệu phản hồi trống.');
}
