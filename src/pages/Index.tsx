import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  lessons: number;
  duration: string;
  category: string;
}

interface ForumPost {
  id: number;
  author: string;
  title: string;
  replies: number;
  likes: number;
  time: string;
}

interface Material {
  id: number;
  title: string;
  type: string;
  category: string;
}

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const courses: Course[] = [
    { id: 1, title: 'Первый год с малышом', description: 'Всё о первом годе жизни ребёнка: уход, развитие, здоровье', progress: 45, lessons: 12, duration: '6 недель', category: 'Младенцы' },
    { id: 2, title: 'Введение прикорма', description: 'Как правильно начать прикорм: схемы, рецепты, советы', progress: 0, lessons: 8, duration: '4 недели', category: 'Питание' },
    { id: 3, title: 'Развитие речи у детей', description: 'Методики и игры для развития речи от 0 до 3 лет', progress: 100, lessons: 10, duration: '5 недель', category: 'Развитие' },
    { id: 4, title: 'Мама в ресурсе', description: 'Как сохранять энергию и заботиться о себе', progress: 20, lessons: 6, duration: '3 недели', category: 'Для мам' },
  ];

  const forumPosts: ForumPost[] = [
    { id: 1, author: 'Анна М.', title: 'Как вы справляетесь с детскими истериками?', replies: 24, likes: 12, time: '2 часа назад' },
    { id: 2, author: 'Мария К.', title: 'Поделитесь опытом приучения к горшку', replies: 18, likes: 8, time: '5 часов назад' },
    { id: 3, author: 'Елена В.', title: 'Любимые развивающие игрушки для 2 лет', replies: 31, likes: 15, time: '1 день назад' },
    { id: 4, author: 'Ольга С.', title: 'Детский сад: когда отдавать ребёнка?', replies: 42, likes: 20, time: '2 дня назад' },
  ];

  const materials: Material[] = [
    { id: 1, title: 'Чек-лист: аптечка для новорождённого', type: 'Чек-лист', category: 'Здоровье' },
    { id: 2, title: 'Режим дня для ребёнка 6 месяцев', type: 'Статья', category: 'Режим' },
    { id: 3, title: 'Календарь прививок', type: 'Таблица', category: 'Здоровье' },
    { id: 4, title: '50 игр для развития мелкой моторики', type: 'Подборка', category: 'Развитие' },
    { id: 5, title: 'Рецепты первых блюд для прикорма', type: 'Рецепты', category: 'Питание' },
    { id: 6, title: 'Как справиться с послеродовой депрессией', type: 'Статья', category: 'Для мам' },
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <section className="text-center py-20 px-4 bg-gradient-to-br from-secondary to-accent rounded-3xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold font-heading text-foreground mb-6">
          Добро пожаловать в наше сообщество
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Место, где мамы поддерживают друг друга, делятся опытом и растут вместе со своими детьми
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" onClick={() => setIsLoggedIn(true)}>
            Присоединиться
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => setActiveSection('courses')}>
            Смотреть курсы
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 animate-scale-in">
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="Heart" className="text-primary" size={24} />
            </div>
            <CardTitle className="font-heading">Поддержка и забота</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Общайтесь с мамами, которые понимают вас. Делитесь радостями и переживаниями в тёплой атмосфере
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="BookOpen" className="text-primary" size={24} />
            </div>
            <CardTitle className="font-heading">Курсы от экспертов</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Проверенные знания по уходу, развитию, питанию. Всё, что нужно знать о материнстве
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="Sparkles" className="text-primary" size={24} />
            </div>
            <CardTitle className="font-heading">Личный кабинет</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Отслеживайте свой прогресс обучения, сохраняйте полезные материалы и общайтесь с единомышленниками
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-muted rounded-3xl p-12 text-center animate-fade-in">
        <h2 className="text-3xl font-bold font-heading mb-4">Популярные курсы</h2>
        <p className="text-muted-foreground mb-8">Начните обучение уже сегодня</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.slice(0, 2).map(course => (
            <Card key={course.id} className="text-left hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">{course.category}</Badge>
                <CardTitle className="font-heading">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="BookOpen" size={16} />
                    {course.lessons} уроков
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </span>
                </div>
                <Button className="w-full" onClick={() => setActiveSection('courses')}>Подробнее</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-12 animate-fade-in">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">О нашем сообществе</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Мы создали пространство, где каждая мама чувствует себя услышанной, понятой и поддержанной. 
          Здесь вы найдёте не только знания, но и настоящую дружбу.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <Icon name="Target" className="text-primary mb-4" size={32} />
          <h3 className="text-2xl font-bold font-heading mb-3">Наша миссия</h3>
          <p className="text-muted-foreground leading-relaxed">
            Помогать мамам обретать уверенность в себе, делиться проверенными знаниями и создавать 
            тёплое сообщество взаимопомощи.
          </p>
        </Card>

        <Card className="p-8">
          <Icon name="Users" className="text-primary mb-4" size={32} />
          <h3 className="text-2xl font-bold font-heading mb-3">Наши ценности</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" className="text-primary mt-1" size={16} />
              <span>Поддержка без осуждения</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" className="text-primary mt-1" size={16} />
              <span>Проверенная информация</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" className="text-primary mt-1" size={16} />
              <span>Уважение к разным подходам</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" className="text-primary mt-1" size={16} />
              <span>Забота о ресурсе мамы</span>
            </li>
          </ul>
        </Card>
      </section>

      <section className="bg-secondary rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4">Присоединяйтесь к нам</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Более 5000 мам уже стали частью нашего сообщества. Начните своё путешествие с нами уже сегодня!
        </p>
        <Button size="lg" onClick={() => setIsLoggedIn(true)}>Зарегистрироваться</Button>
      </section>
    </div>
  );

  const renderForum = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold font-heading mb-2">Форум</h1>
          <p className="text-muted-foreground">Общайтесь, задавайте вопросы и делитесь опытом</p>
        </div>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Создать тему
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4 mb-6">
          <TabsTrigger value="all">Все темы</TabsTrigger>
          <TabsTrigger value="popular">Популярные</TabsTrigger>
          <TabsTrigger value="new">Новые</TabsTrigger>
          <TabsTrigger value="my">Мои темы</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {forumPosts.map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {post.author} • {post.time}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="MessageCircle" size={16} />
                        {post.replies} ответов
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Heart" size={16} />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="popular">
          <p className="text-center text-muted-foreground py-12">Популярные темы появятся здесь</p>
        </TabsContent>

        <TabsContent value="new">
          <p className="text-center text-muted-foreground py-12">Новые темы появятся здесь</p>
        </TabsContent>

        <TabsContent value="my">
          <p className="text-center text-muted-foreground py-12">Ваши темы появятся здесь</p>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold font-heading mb-2">Курсы</h1>
        <p className="text-muted-foreground">Образовательные программы от экспертов по материнству</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-5 mb-6">
          <TabsTrigger value="all">Все курсы</TabsTrigger>
          <TabsTrigger value="babies">Младенцы</TabsTrigger>
          <TabsTrigger value="development">Развитие</TabsTrigger>
          <TabsTrigger value="nutrition">Питание</TabsTrigger>
          <TabsTrigger value="moms">Для мам</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid md:grid-cols-2 gap-6">
          {courses.map(course => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">{course.category}</Badge>
                <CardTitle className="font-heading">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="BookOpen" size={16} />
                    {course.lessons} уроков
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </span>
                </div>
                {course.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                )}
                <Button className="w-full">
                  {course.progress === 0 ? 'Начать курс' : course.progress === 100 ? 'Пройден' : 'Продолжить'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {['babies', 'development', 'nutrition', 'moms'].map(category => (
          <TabsContent key={category} value={category}>
            <p className="text-center text-muted-foreground py-12">Курсы этой категории появятся здесь</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );

  const renderMaterials = () => (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold font-heading mb-2">Материалы</h1>
        <p className="text-muted-foreground">Полезные статьи, чек-листы и подборки для родителей</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4 mb-6">
          <TabsTrigger value="all">Все материалы</TabsTrigger>
          <TabsTrigger value="articles">Статьи</TabsTrigger>
          <TabsTrigger value="checklists">Чек-листы</TabsTrigger>
          <TabsTrigger value="recipes">Рецепты</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
          {materials.map(material => (
            <Card key={material.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{material.type}</Badge>
                  <Badge>{material.category}</Badge>
                </div>
                <CardTitle className="font-heading text-lg">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Открыть материал
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {['articles', 'checklists', 'recipes'].map(type => (
          <TabsContent key={type} value={type}>
            <p className="text-center text-muted-foreground py-12">Материалы этого типа появятся здесь</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8 animate-fade-in">
      <Card className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="text-2xl">АМ</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold font-heading mb-2">Анна Михайлова</h1>
            <p className="text-muted-foreground">Участник с февраля 2024</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-secondary/50">
            <CardContent className="p-6 text-center">
              <Icon name="BookOpen" className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-3xl font-bold font-heading mb-1">3</p>
              <p className="text-sm text-muted-foreground">Курса в процессе</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50">
            <CardContent className="p-6 text-center">
              <Icon name="Award" className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-3xl font-bold font-heading mb-1">1</p>
              <p className="text-sm text-muted-foreground">Курс завершён</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50">
            <CardContent className="p-6 text-center">
              <Icon name="MessageCircle" className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-3xl font-bold font-heading mb-1">24</p>
              <p className="text-sm text-muted-foreground">Сообщения на форуме</p>
            </CardContent>
          </Card>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Мои курсы</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {courses.filter(c => c.progress > 0 && c.progress < 100).map(course => (
            <div key={course.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.lessons} уроков • {course.duration}</p>
                </div>
                <Badge>{course.category}</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Прогресс</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>
              <Button variant="outline" size="sm" className="w-full">Продолжить обучение</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Завершённые курсы</CardTitle>
        </CardHeader>
        <CardContent>
          {courses.filter(c => c.progress === 100).map(course => (
            <div key={course.id} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">Завершён</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Скачать сертификат</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-heading mb-2">Контакты</h1>
        <p className="text-muted-foreground">Мы всегда рады помочь и ответить на ваши вопросы</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Mail" className="text-primary" size={24} />
          </div>
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-muted-foreground">info@mama-community.ru</p>
        </Card>

        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Phone" className="text-primary" size={24} />
          </div>
          <h3 className="font-semibold mb-2">Телефон</h3>
          <p className="text-muted-foreground">+7 (800) 123-45-67</p>
        </Card>

        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="MessageCircle" className="text-primary" size={24} />
          </div>
          <h3 className="font-semibold mb-2">Telegram</h3>
          <p className="text-muted-foreground">@mama_community</p>
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold font-heading mb-6">Напишите нам</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Имя</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="Ваше имя"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Сообщение</label>
            <textarea 
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="Ваше сообщение..."
            />
          </div>
          <Button type="submit" size="lg" className="w-full">Отправить сообщение</Button>
        </form>
      </Card>

      <Card className="bg-secondary p-8 text-center">
        <h2 className="text-2xl font-bold font-heading mb-3">Присоединяйтесь к нашим социальным сетям</h2>
        <p className="text-muted-foreground mb-6">Следите за новостями, советами и акциями</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Icon name="Facebook" size={20} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Icon name="Instagram" size={20} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Icon name="Youtube" size={20} />
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
              <img 
                src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-07 в 22.17.38.png" 
                alt="SOLOMAMA" 
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('home')} 
                className={`transition-colors ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('about')} 
                className={`transition-colors ${activeSection === 'about' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                О сообществе
              </button>
              <button 
                onClick={() => setActiveSection('forum')} 
                className={`transition-colors ${activeSection === 'forum' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Форум
              </button>
              <button 
                onClick={() => setActiveSection('courses')} 
                className={`transition-colors ${activeSection === 'courses' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Курсы
              </button>
              <button 
                onClick={() => setActiveSection('materials')} 
                className={`transition-colors ${activeSection === 'materials' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Материалы
              </button>
              <button 
                onClick={() => setActiveSection('contacts')} 
                className={`transition-colors ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-2">
              {isLoggedIn ? (
                <Button variant="ghost" onClick={() => setActiveSection('profile')}>
                  <Avatar className="w-8 h-8 mr-2">
                    <AvatarFallback>АМ</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline">Мой кабинет</span>
                </Button>
              ) : (
                <Button onClick={() => setIsLoggedIn(true)}>Войти</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'forum' && renderForum()}
        {activeSection === 'courses' && renderCourses()}
        {activeSection === 'materials' && renderMaterials()}
        {activeSection === 'profile' && renderProfile()}
        {activeSection === 'contacts' && renderContacts()}
      </main>

      <footer className="border-t mt-20 py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-07 в 22.17.38.png" 
                  alt="SOLOMAMA" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Сообщество мам, где поддержка и забота — главные ценности
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setActiveSection('about')} className="hover:text-foreground">О сообществе</button></li>
                <li><button onClick={() => setActiveSection('courses')} className="hover:text-foreground">Курсы</button></li>
                <li><button onClick={() => setActiveSection('forum')} className="hover:text-foreground">Форум</button></li>
                <li><button onClick={() => setActiveSection('materials')} className="hover:text-foreground">Материалы</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Помощь</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Как начать</a></li>
                <li><a href="#" className="hover:text-foreground">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:text-foreground">Правила сообщества</a></li>
                <li><button onClick={() => setActiveSection('contacts')} className="hover:text-foreground">Связаться с нами</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Юридическая информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-foreground">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-foreground">Публичная оферта</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Мама+. Все права защищены. Создано с любовью для мам ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;