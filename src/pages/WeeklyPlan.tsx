import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Download, 
  Copy, 
  Clock, 
  TrendingUp,
  Sparkles,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function WeeklyPlan() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const theme = searchParams.get('theme') || '운동 전후 변화 스토리';

  const weeklyPlanData = {
    theme: theme,
    expectedGrowth: '+15%',
    posts: [
      {
        day: 1,
        title: '꾸준함이 만든 변화',
        caption: '작은 노력들이 모여 나를 만든다 💪\n\n매일 조금씩이라도 움직이는 것이\n큰 변화를 만들어낸다는 걸 깨달았어요.\n\n오늘도 어제보다 나은 나를 위해! 🔥',
        hashtags: ['#루틴', '#성장', '#운동습관', '#꾸준함'],
        uploadTime: '오후 7:00',
        imageUrl: '/mock/day1.png'
      },
      {
        day: 2,
        title: '포기하지 않는 나',
        caption: '오늘도 어제보다 강해진 나를 만든다 🥊\n\n힘들 때마다 포기하고 싶었지만\n그럴 때마다 더 강해지는 나를 발견해요.\n\n#오늘도화이팅',
        hashtags: ['#도전', '#복싱', '#꾸준함', '#성장마인드'],
        uploadTime: '오후 8:00',
        imageUrl: '/mock/day2.png'
      },
      {
        day: 3,
        title: '변화의 시작점',
        caption: '모든 변화는 작은 결심에서 시작된다 ✨\n\n6개월 전의 나와 지금의 나,\n정말 많이 달라졌다는 걸 느껴요.\n\n여러분도 할 수 있어요! 💪',
        hashtags: ['#변화', '#동기부여', '#자기계발', '#성장'],
        uploadTime: '오후 6:30',
        imageUrl: '/mock/day3.png'
      },
      {
        day: 4,
        title: '건강한 루틴의 힘',
        caption: '좋은 습관이 나를 만든다 🌱\n\n운동, 식단, 수면...\n작은 것들이 모여서 큰 변화를 만들어요.\n\n오늘 하루도 건강하게! 💚',
        hashtags: ['#건강루틴', '#라이프스타일', '#웰빙', '#자기관리'],
        uploadTime: '오전 9:00',
        imageUrl: '/mock/day4.png'
      },
      {
        day: 5,
        title: '운동이 주는 선물',
        caption: '운동은 몸뿐만 아니라 마음도 건강하게 🧠💪\n\n스트레스 해소, 자신감 향상,\n그리고 더 나은 수면까지!\n\n오늘도 움직여볼까요? 🏃‍♀️',
        hashtags: ['#멘탈헬스', '#운동효과', '#스트레스해소', '#자신감'],
        uploadTime: '오후 7:30',
        imageUrl: '/mock/day5.png'
      },
      {
        day: 6,
        title: '나만의 속도로',
        caption: '남과 비교하지 말고 나만의 속도로 🐢\n\n빠르지 않아도 괜찮아요.\n중요한 건 멈추지 않는 것!\n\n오늘도 한 걸음씩 앞으로 💫',
        hashtags: ['#나만의속도', '#비교금지', '#꾸준함', '#자기사랑'],
        uploadTime: '오후 8:30',
        imageUrl: '/mock/day6.png'
      },
      {
        day: 7,
        title: '일주일의 마무리',
        caption: '한 주간 정말 수고했어요! 👏\n\n작은 성취들이 모여서\n큰 변화를 만들어가고 있어요.\n\n다음 주도 함께 화이팅! 🔥✨',
        hashtags: ['#일주일완주', '#성취감', '#자축', '#다음주준비'],
        uploadTime: '오후 6:00',
        imageUrl: '/mock/day7.png'
      }
    ]
  };

  const handleCopyCaption = (caption: string, hashtags: string[]) => {
    const fullText = `${caption}\n\n${hashtags.join(' ')}`;
    navigator.clipboard.writeText(fullText);
  };

  const handleDownloadAll = () => {
    // 실제 구현에서는 이미지 다운로드 로직 추가
    console.log('전체 카드뉴스 다운로드');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#1c2b3e] p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-[#0070C0]" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              AI 7일 콘텐츠 플랜
            </h1>
          </div>
          <p className="text-xl text-blue-200">
            선택한 주제 기반으로 다음 7일간 게시물을 자동 생성합니다
          </p>
          
          {/* Selected Theme */}
          <div className="inline-flex items-center gap-2 bg-[#0070C0]/20 border border-[#0070C0]/30 rounded-full px-6 py-3">
            <span className="text-[#0070C0] font-medium">선택된 주제:</span>
            <span className="text-white font-semibold">{theme}</span>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                  <span className="text-white text-lg">
                    AI가 최근 게시물 패턴과 참여율을 기반으로 다음 7일간의 업로드 계획을 생성했습니다
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300">예상 참여율 향상:</span>
                  <span className="text-green-400 font-bold text-xl">{weeklyPlanData.expectedGrowth}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weekly Plan Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {weeklyPlanData.posts.map((post, index) => (
            <motion.div
              key={post.day}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#0070C0]/30 transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#0070C0]/20 text-[#0070C0] border-[#0070C0]/30">
                      Day {post.day}
                    </Badge>
                    <div className="flex items-center gap-1 text-blue-300 text-sm">
                      <Clock className="h-4 w-4" />
                      {post.uploadTime}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-[#0070C0] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#0070C0]/20 to-purple-600/20 rounded-lg border border-white/10 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Calendar className="h-8 w-8 text-[#0070C0] mx-auto" />
                      <span className="text-white/70 text-sm">AI 생성 이미지</span>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="space-y-2">
                    <p className="text-blue-200 text-sm leading-relaxed line-clamp-4">
                      {post.caption}
                    </p>
                  </div>
                  
                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1">
                    {post.hashtags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="outline" 
                        className="text-xs border-[#0070C0]/30 text-[#0070C0] hover:bg-[#0070C0]/10"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Copy Button */}
                  <Button
                    onClick={() => handleCopyCaption(post.caption, post.hashtags)}
                    variant="outline"
                    size="sm"
                    className="w-full !bg-transparent !hover:bg-transparent border-[#0070C0]/30 text-[#0070C0] hover:border-[#0070C0] hover:text-white"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    문구 복사하기
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={handleDownloadAll}
            className="bg-[#0070C0] hover:bg-[#0070C0]/80 text-white"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            📥 전체 카드뉴스 다운로드
          </Button>
          
          <Button
            onClick={() => {
              const allCaptions = weeklyPlanData.posts.map(post => 
                `${post.title}\n${post.caption}\n${post.hashtags.map(tag => `#${tag}`).join(' ')}`
              ).join('\n\n---\n\n');
              navigator.clipboard.writeText(allCaptions);
            }}
            variant="outline"
            className="!bg-transparent !hover:bg-transparent border-white/30 text-white hover:border-white/50"
            size="lg"
          >
            <Copy className="mr-2 h-5 w-5" />
            📱 인스타 업로드 문구 복사
          </Button>
          
          <Button
            onClick={() => navigate('/result')}
            variant="outline"
            className="!bg-transparent !hover:bg-transparent border-white/30 text-white hover:border-white/50"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            ← 분석 페이지로 돌아가기
          </Button>
        </motion.div>
      </div>
    </div>
  );
}