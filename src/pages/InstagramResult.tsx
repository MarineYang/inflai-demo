import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Calendar, 
  Users, 
  Heart, 
  Clock, 
  Target,
  BarChart3,
  Instagram,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function InstagramResult() {
  const navigate = useNavigate();

  // Mock data based on the analysis report
  const profileData = {
    username: "_bae92",
    bio: "취미&피트니스 | 뭘 생각해.. 그냥 하는거지 💪 | 열정으로 한계를 넘자.",
    followers: 223,
    following: 213,
    posts: 24,
    engagementRate: 57.85,
    avgUploadInterval: 8,
    mainThemes: ["복싱", "피트니스", "자기계발"]
  };

  const contentStrategies = [
    {
      title: "복싱 훈련 루틴 공유",
      description: "오늘의 복싱 연습, 새로운 기술 배우기",
      hashtags: ["#복싱", "#훈련", "#자기계발", "#꾸준함"],
      time: "오후 7:00",
      engagement: "높음"
    },
    {
      title: "운동 전후 변화 스토리",
      description: "힘든 순간을 이겨낸 나만의 방법",
      hashtags: ["#동기부여", "#성장", "#도전", "#마인드셋"],
      time: "오후 8:30",
      engagement: "매우 높음"
    },
    {
      title: "일상 속 자기관리 팁",
      description: "작은 습관이 만드는 큰 변화",
      hashtags: ["#자기관리", "#루틴", "#라이프스타일", "#건강"],
      time: "오후 6:30",
      engagement: "높음"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            AI 분석 결과
          </h1>
          <p className="text-xl text-blue-200 mb-2">@{profileData.username} 계정 브랜딩 컨설팅 리포트</p>
          <div className="flex items-center justify-center gap-2 text-sm text-blue-300">
            <BarChart3 className="w-4 h-4" />
            <span>AI 기반 종합 분석 완료</span>
          </div>
        </div>

        {/* Profile Overview Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Profile Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">@{profileData.username}</h3>
                    <p className="text-blue-200 text-sm">피트니스 & 자기계발</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4 italic">"{profileData.bio}"</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold text-lg">{profileData.posts}</div>
                    <div className="text-xs text-blue-200">게시물</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{profileData.followers}</div>
                    <div className="text-xs text-blue-200">팔로워</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{profileData.following}</div>
                    <div className="text-xs text-blue-200">팔로잉</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right: AI Branding Summary */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border-blue-400/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-200">
                  <Target className="w-5 h-5" />
                  AI 브랜딩 요약
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 bg-blue-500/20 rounded-lg">
                  <p className="text-sm font-medium text-blue-100">
                    "자기계발 중심의 피트니스 계정으로 강한 동기부여 메시지를 전달합니다."
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">프로필 문구에 구체적인 목표나 성과 추가 권장</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">링크 트리를 활용한 운동 루틴 공유로 전환율 향상</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Insights Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <h2 className="text-2xl font-bold mb-8 text-center">AI 분석 요약</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400 mb-1">{profileData.engagementRate}%</div>
                <div className="text-sm text-blue-200">참여율</div>
                <div className="text-xs text-gray-400 mt-1">매우 높은 수준</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">{profileData.avgUploadInterval}일</div>
                <div className="text-sm text-blue-200">평균 업로드 간격</div>
                <div className="text-xs text-gray-400 mt-1">주 2-3회 권장</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-sm font-bold text-purple-400 mb-2">주요 주제</div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {profileData.mainThemes.map((theme, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-purple-500/20 text-purple-200">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Strategy Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <h2 className="text-2xl font-bold mb-8 text-center">콘텐츠 전략 제안</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contentStrategies.map((strategy, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-200">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-4">{strategy.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {strategy.hashtags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-blue-400/50 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-blue-200">
                      <Clock className="w-4 h-4" />
                      {strategy.time}
                    </div>
                    <Badge className={`text-xs ${strategy.engagement === '매우 높음' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}`}>
                      {strategy.engagement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Branding & Feed Improvement Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <h2 className="text-2xl font-bold mb-8 text-center">피드 구성 & 브랜딩 제안</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-blue-200 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  피드 톤앤매너
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <p className="text-sm font-medium text-blue-200 mb-2">3-2-1 공식 적용</p>
                    <p className="text-xs text-gray-300">리일스 3개 → 사진 2개 → 카드뉴스 1개 패턴</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <p className="text-sm font-medium text-purple-200 mb-2">일관된 메시지</p>
                    <p className="text-xs text-gray-300">"도전과 성장"을 핵심 키워드로 통일</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-blue-200 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  프로필 개선 제안
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <p className="text-sm font-medium text-green-200 mb-2">바이오 최적화</p>
                    <p className="text-xs text-gray-300">구체적인 성과나 목표 수치 추가</p>
                  </div>
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <p className="text-sm font-medium text-orange-200 mb-2">링크 활용</p>
                    <p className="text-xs text-gray-300">운동 루틴 가이드나 개인 블로그 연결</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Growth Strategy Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-600">
          <h2 className="text-2xl font-bold mb-8 text-center">AI 리포트 요약</h2>
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border-blue-400/30">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-400 mb-2">+18%</div>
                <div className="text-sm text-blue-200 mb-4">성장 개선률 예측 (향후 2주)</div>
                <Progress value={75} className="w-full max-w-md mx-auto h-3" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-blue-200">현재 팔로워</span>
                  </div>
                  <div className="text-2xl font-bold">{profileData.followers}</div>
                  <div className="text-xs text-green-400">+25-35명 예상</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-blue-200">평균 좋아요</span>
                  </div>
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-xs text-green-400">+15% 향상 예상</div>
                </div>
              </div>

              <div className="text-center p-4 bg-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-100 italic">
                  "리일스 업로드 시간을 오후 7~9시로 조정하면 참여율이 향상됩니다."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA Section */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              variant="outline" 
              className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              홈으로 돌아가기
            </Button>
            <Button 
              onClick={() => navigate('/analyze')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
            >
              다른 계정 분석하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}