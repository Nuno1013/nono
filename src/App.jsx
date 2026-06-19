import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Lightbulb, Calendar, 
  Award, Briefcase, GraduationCap, Star, Globe, Code2, 
  Database, Sparkles, ArrowDown, User, FileText
} from 'lucide-react';

// 动画配置
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* 星光背景层 (全局固定) */}
      <div className="starry-overlay" />
      
      {/* 1. 悬浮磨砂玻璃导航栏 (固定顶部) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-custom mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <FileText className="w-4 h-4 text-starlight" />
            蒋一诺 <span className="text-gray-500 font-normal text-sm hidden sm:inline">/ Resume</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">关于我</a>
            <a href="#experience" className="hover:text-white transition-colors">实践经历</a>
            <a href="#honors" className="hover:text-white transition-colors">活动荣誉</a>
            <a href="#evaluation" className="hover:text-white transition-colors">自我评价</a>
          </div>
          
          <a href="#contact" className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-starlight/10 hover:border-starlight/30 hover:text-white transition-all">
            联系我
          </a>
        </div>
      </nav>

      {/* 2. 首页 (Hero Section) - 真实的简历头部 */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
       {/* 居中的发光模糊球体 */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-starlight/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div 
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} 
          className="relative z-10 max-w-4xl w-full text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-starlight" />
            <span>求职意向：游戏发行中台 / 项目管理 (PMO)</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            蒋一诺
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
            南京航空航天大学金城学院 · 计算机科学与技术 · 2027届本科
          </p>

          {/* 核心简介卡片 (类似AI终端的极简风格，但内容是真实的自我评价) */}
          <motion.div 
            initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay: 0.3}}
            className="glass-card p-8 md:p-10 text-left max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4 text-starlight text-sm font-medium">
              <User className="w-4 h-4" />
              <span>Personal Summary</span>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
              一个不想死磕代码，但想用“系统逻辑”为游戏发行“修桥铺路”的 CS 学生。我理解的发行中台不是简单的执行打杂，而是保障前线业务高效、不出错的“基建”。银行的数据治理实习练就了我对数据的极度严谨，擅长梳理 SOP 以规避配置错误与资损风险；跨国项目与校园公关经历则让我能顺畅拉通研发、策划与外部渠道。期待用理科生的严谨逻辑与文科生的共情沟通，做国内发行线最靠谱的“中台枢纽”。
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.div>
      </section>

      {/* 3. 关于我 (个人信息 + 教育 + 技能) */}
      <section id="about" className="relative z-10 py-32 px-8 md:px-16">
        <div className="max-w-custom mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* 左侧：个人信息与技能 */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div variants={fadeInUp} className="glass-card p-8">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2"><User className="w-4 h-4 text-starlight"/> 个人信息</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex justify-between border-b border-white/5 pb-2"><span>生日</span><span className="text-gray-200">2003.10.13</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-2"><span>民族</span><span className="text-gray-200">汉族</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-2"><span>政治面貌</span><span className="text-gray-200">共青团员</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-2"><span>籍贯</span><span className="text-gray-200">江苏常州</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-2"><span>现住</span><span className="text-gray-200">江苏省常州市</span></div>
                  <div className="flex items-center gap-3 pt-2"><Phone className="w-4 h-4 text-starlight" /> 18112876061</div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-starlight" /> 1632282126@qq.com</div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card p-8">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2"><Code2 className="w-4 h-4 text-starlight"/> 技能专长</h3>
                <ul className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-starlight mt-1">•</span>
                    <span><strong className="text-gray-200">语言：</strong>大学英语四级（CET-4），能很好的英文阅读，普通话标准。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-starlight mt-1">•</span>
                    <span><strong className="text-gray-200">专业技能：</strong>具备良好的技术文档阅读与撰写能力；掌握 SQL 及基础数据处理能力。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-starlight mt-1">•</span>
                    <span><strong className="text-gray-200">工具与测试：</strong>日常借助 AI 编程工具辅助调试和开发；了解软件测试基本概念。</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* 右侧：教育背景 */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10">
                <h3 className="text-xl font-semibold mb-8 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-starlight"/> 教育背景</h3>
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-medium text-white">南京航空航天大学金城学院</h4>
                    <p className="text-gray-400 mt-1">计算机科学与技术 / 本科</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 whitespace-nowrap">2023.09 - 2027.06</span>
                </div>
                
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  <p><strong className="text-white">学业成绩：</strong>GPA：3.9/5.0，平均分 89。</p>
                  <p><strong className="text-white">荣誉奖项：</strong>获 2023-2024 校级三好学生和“学业奖学金”三等奖；2024-2025 校级“发展奖学金”三等奖。</p>
                  <p><strong className="text-white">主修课程：</strong>Java语言，C语言程序设计，C++语言程序设计，Python程序设计，编译原理，操作系统，计算机网络等。</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. 实践经历 */}
      <section id="experience" className="relative z-10 py-32 px-8 md:px-16 bg-dark-800/30">
        <div className="max-w-custom mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once: true}} className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">实践经历</h2>
            <p className="text-gray-500">在真实业务场景中沉淀流程与数据经验</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}} className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                <h3 className="text-xl font-semibold text-white">中国农业银行 <span className="text-gray-500 text-base font-normal ml-2">实习生</span></h3>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">2024.07 - 2024.08</span>
              </div>
              <p className="text-gray-300 leading-relaxed">作为业务支持节点，跟进对公业务的日常流转进度；主动协调前台业务与后台审批部门，解决流程阻塞问题，保障核心业务按时交付，提升跨部门协作效率。</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                <h3 className="text-xl font-semibold text-white">江苏农村商业银行 <span className="text-gray-500 text-base font-normal ml-2">实习生</span></h3>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">2026.01 - 2026.02</span>
              </div>
              <p className="text-gray-300 leading-relaxed">在网点业务高峰期，调度大堂人员，优化客户动线设计与分流策略，使客户平均等待时间缩短，有效提升网点整体运营效率与客户满意度。</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. 活动荣誉 */}
      <section id="honors" className="relative z-10 py-32 px-8 md:px-16">
        <div className="max-w-custom mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once: true}} className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">活动与荣誉</h2>
            <p className="text-gray-500">跨界探索，从校园到国际舞台的统筹与实践</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '联合国人口基金 UPower计划', role: '性教育与气候变化小组组长', time: '2023.11-2023.12', desc: '主导“性教育与气候变化”课题的全生命周期管理，制定里程碑计划；统筹组员的任务分配，克服跨专业沟通壁垒，确保项目按期高质量交付。', icon: Globe },
              { title: '国际青年交流协会', role: '组织部', time: '2023.09-2025.06', desc: '积极并多次参与学校各类大型活动的策划与场务工作，负责从前期策划到现场执行的全链路管理。', icon: Calendar },
              { title: '学生事务服务中心', role: '公关部', time: '2023.09-2025.06', desc: '负责校园反诈宣传矩阵运营，结合高发案例合作撰写多篇通报并且负责与其他部门进行各类活动的对接协商工作。', icon: Award },
              { title: 'WELAND 青年领袖影响力培训营', role: '个人最具潜力奖, 小组一等奖', time: '2023.11', desc: '在第十届国际性模拟联合国平台组织的培训营中，展现出色的跨文化沟通与议题拆解能力。', icon: Star },
              { title: '联合国人口基金 UPower计划', role: '校园大使 / 三等奖', time: '2023.11', desc: '第十届青年榜样影响力培训项目，作为校园大使推动项目落地并获得三等奖。', icon: Globe },
              { title: '“用英语讲中国故事”活动', role: '优秀奖 (大学组-华东1区)', time: '2024.07', desc: '参与第四届“用英语讲中国故事”活动，展现优秀的跨文化表达与英语应用能力。', icon: Award },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-8 md:p-10 min-h-[240px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-starlight/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-starlight" />
                  </div>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                <p className="text-starlight/80 text-sm mb-4">{item.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. 自我评价模块 (保持大卡片样式，一字不改) */}
      <section id="evaluation" className="relative z-10 py-32 px-8 md:px-16 bg-dark-800/30">
        <div className="max-w-custom mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{once: true}} className="max-w-4xl mx-auto">
            <div className="glass-card p-10 md:p-16">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-lg bg-starlight/10 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-starlight" />
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-gray-200">个人定位</h3>
              </div>

              <div className="mb-12">
                <p className="text-lg md:text-xl text-gray-300 leading-[1.8] font-light">
                  一个不想死磕代码，但想用“系统逻辑”为游戏发行“修桥铺路”的 CS学生。我理解的发行中台不是简单的执行打杂，而是保障前线业务高效、不出错的“基建”。银行的数据治理实习练就了我对数据的极度严谨，擅长梳理 SOP以规避配置错误与资损风险；跨国项目与校园公关经历则让我能顺畅拉通研发、策划与外部渠道。期待用理科生的严谨逻辑与文科生的共情沟通，做国内发行线最靠谱的“中台枢纽”。
                </p>
              </div>

              <div className="border-t border-white/5 pt-6">
                <p className="text-xs text-gray-500 tracking-wider uppercase">
                  Core Competencies: 跨部门协同拉通 · 数据治理与SOP沉淀 · 游戏商业化洞察 · 敏捷项目进度管理
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. 底部联系方式模块 (整屏收尾) */}
      <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center px-8 md:px-16">
        <div className="max-w-custom mx-auto w-full text-center">
          <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration: 1}}>
            <Sparkles className="w-12 h-12 text-starlight mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">Let's Build the Bridge</h2>
            <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
              期待加入腾讯国内发行线，用严谨的逻辑与高效的执行，成为连接研发、策划与渠道的可靠枢纽。
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-20">
              <a href="tel:18112876061" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-starlight/10 group-hover:border-starlight/30 transition-all">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-starlight transition-colors" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">18112876061</span>
              </a>
              <a href="mailto:1632282126@qq.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-starlight/10 group-hover:border-starlight/30 transition-all">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-starlight transition-colors" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">1632282126@qq.com</span>
              </a>
            </div>

            <div className="text-gray-600 text-sm">
              <p>© {new Date().getFullYear()} 蒋一诺. Designed for Game Publishing Operations.</p>
              <p className="mt-2">江苏省常州市</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
