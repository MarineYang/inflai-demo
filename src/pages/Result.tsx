import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Target, 
  Lightbulb, 
  BarChart3,
  Home,
  Instagram,
  Brain,
  Sparkles
} from 'lucide-react';

export default function Result() {
  const navigate = useNavigate();

  const analysisData = {
    engagement: 3.4,
    uploadInterval: 8,
    mainTopics: ['운동', '루틴', '자기계발'],
    followers: 2847,
    avgLikes: 127,
    growthPrediction: 18
  };

  const contentSuggestions = [
    {
      title: "복성 호현 루틴 공유",
      description: "오늘의 복싱 연습, 새로운 기술 배우기",
      hashtags: ["#복싱", "#루틴", "#자기계발"],
      uploadTime: "오후 7:00",
      engagement: "높음"
    },
    {
      title: "운동 전후 변화 스토리",
      description: "꾸준한 운동이 가져다 나만의 변화",
      hashtags: ["#기록", "#성장", "#도전"],
      uploadTime: "오후 8:30",
      engagement: "매우 높음"
    },
    {
      title: "일상 속 자기관리 팁",
      description: "작은 습관이 만드는 큰 변화",
      hashtags: ["#자기관리", "#루틴", "#건강"],
      uploadTime: "오후 6:30",
      engagement: "높음"
    }
  ];

  const handleWeeklyPlan = (contentTitle: string) => {
    navigate(`/weekly-plan?theme=${encodeURIComponent(contentTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            AI 분석 결과
          </h1>
          <p className="text-xl text-blue-200">
            당신의 계정을 분석하고 성장 전략을 제안합니다
          </p>
        </div>

        {/* Analysis Summary */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-400" />
              AI 분석 요약
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">참여율</span>
                </div>
                <div className="text-3xl font-bold text-white">{analysisData.engagement}%</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">평균 업로드 간격</span>
                </div>
                <div className="text-3xl font-bold text-white">{analysisData.uploadInterval}일</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Target className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">주요 주제</span>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {analysisData.mainTopics.map((topic, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600/30 text-blue-200">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Strategy */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
              콘텐츠 전략 제안
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contentSuggestions.map((suggestion, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          suggestion.engagement === '매우 높음' 
                            ? 'bg-green-600/30 text-green-300' 
                            : 'bg-blue-600/30 text-blue-300'
                        }`}
                      >
                        {suggestion.engagement}
                      </Badge>
                      <div className="flex items-center gap-1 text-blue-300 text-xs">
                        <Calendar className="h-3 w-3" />
                        {suggestion.uploadTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                      {suggestion.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-blue-200 text-sm">{suggestion.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {suggestion.hashtags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs border-blue-400/30 text-blue-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* 7일 게시글 생성 버튼 */}
                    <Button
                      onClick={() => handleWeeklyPlan(suggestion.title)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      size="sm"
                    >
                      <Brain className="mr-2 h-4 w-4" />
                      🧠 7일 게시글 생성하기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Growth Prediction */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-400" />
              AI 리포트 요약
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">성장 개선률 예측</h3>
                <div className="text-5xl font-bold text-green-400">+{analysisData.growthPrediction}%</div>
              </div>
              
              <div className="max-w-md mx-auto space-y-2">
                <Progress value={analysisData.growthPrediction} className="h-3" />
                <p className="text-blue-200 text-sm">
                  제안된 전략을 적용하면 3개월 내 {analysisData.growthPrediction}% 성장이 예상됩니다
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{analysisData.followers.toLocaleString()}</div>
                <div className="text-blue-200">현재 팔로워</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{analysisData.avgLikes}</div>
                <div className="text-blue-200">평균 좋아요</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            <Home className="mr-2 h-5 w-5" />
            홈으로 돌아가기
          </Button>
          
          <Button
            onClick={() => navigate('/analyze')}
            variant="outline"
            className="!bg-transparent !hover:bg-transparent border-white/30 text-white hover:border-white/50"
            size="lg"
          >
            <Instagram className="mr-2 h-5 w-5" />
            다른 계정 분석하기
          </Button>
        </div>
      </div>
    </div>
  );
}