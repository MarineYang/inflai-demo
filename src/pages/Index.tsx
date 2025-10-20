import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Instagram,
  ArrowRight,
  Sparkles,
  Users,
  MessageSquare
} from 'lucide-react';

export default function Index() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "AI 기반 계정 분석",
      description: "참여율, 업로드 패턴, 콘텐츠 성과를 종합 분석"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "맞춤형 브랜딩 전략",
      description: "계정 특성에 맞는 브랜딩 및 포지셔닝 제안"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "성장률 예측",
      description: "AI 모델 기반 팔로워 증가 및 참여율 향상 예측"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                INFLAi
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-4 font-light">
              AI 기반 SNS 성장 컨설턴트
            </p>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              인공지능이 당신의 인스타그램 계정을 분석하고, 
              <span className="text-blue-300 font-medium"> 맞춤형 성장 전략</span>을 제안합니다.
              <br />브랜딩부터 콘텐츠 기획까지, 모든 것을 한 번에.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                onClick={() => navigate('/analyze')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                내 계정 분석하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => navigate('/instagram-result')}
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5 mr-2" />
                분석 결과 데모 보기
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-blue-200">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border-blue-400/30 max-w-2xl mx-auto">
              <CardContent className="pt-8">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                    <div className="text-sm text-blue-200">분석 정확도</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">+24%</div>
                    <div className="text-sm text-blue-200">평균 성장률</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
                    <div className="text-sm text-blue-200">분석 완료</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <h2 className="text-3xl font-bold mb-12 text-center">어떻게 작동하나요?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-200">계정 URL 입력</h3>
                <p className="text-gray-300 text-sm">분석하고 싶은 인스타그램 계정 주소를 입력해주세요</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-200">AI 분석 실행</h3>
                <p className="text-gray-300 text-sm">AI가 콘텐츠, 참여율, 브랜딩을 종합 분석합니다</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-200">맞춤 전략 제안</h3>
                <p className="text-gray-300 text-sm">개인화된 성장 전략과 콘텐츠 아이디어를 받아보세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}