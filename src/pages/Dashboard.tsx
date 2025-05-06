
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Heart, Gift, Ticket, User, Upload, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import DashboardSidebar from '@/components/DashboardSidebar';

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("reservations");
  
  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://acomodafacil.com/refer/user123");
    toast({
      title: "Link copiado!",
      description: "Link de indicação copiado para a área de transferência."
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-grow">
          <h1 className="text-2xl font-semibold text-secondary mb-6">Minha Conta</h1>
          
          {activeTab === "reservations" && (
            <Card>
              <CardHeader>
                <CardTitle>Minhas Reservas</CardTitle>
                <CardDescription>Gerencie suas reservas atuais e passadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="accommodations">
                  <TabsList>
                    <TabsTrigger value="accommodations">Acomodações</TabsTrigger>
                    <TabsTrigger value="services">Outros Serviços</TabsTrigger>
                  </TabsList>
                  <TabsContent value="accommodations" className="mt-4">
                    <div className="space-y-4">
                      <Card className="p-4">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="w-full md:w-24 h-24 bg-gray-200 rounded-md"></div>
                          <div className="flex-grow">
                            <h3 className="font-semibold">Student Housing Dublin</h3>
                            <p className="text-sm text-gray-500">Dublin, Irlanda</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm">10/Jan/2023 - 10/Fev/2023</span>
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Confirmado</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="w-full md:w-24 h-24 bg-gray-200 rounded-md"></div>
                          <div className="flex-grow">
                            <h3 className="font-semibold">Toronto Student Residence</h3>
                            <p className="text-sm text-gray-500">Toronto, Canadá</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm">15/Mar/2023 - 15/Jun/2023</span>
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pendente</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="services" className="mt-4">
                    <div className="space-y-4">
                      <Card className="p-4">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="w-full md:w-24 h-24 bg-gray-200 rounded-md"></div>
                          <div className="flex-grow">
                            <h3 className="font-semibold">Serviço de Transfer</h3>
                            <p className="text-sm text-gray-500">Dublin, Irlanda</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm">10/Jan/2023</span>
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Confirmado</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "wishlist" && (
            <Card>
              <CardHeader>
                <CardTitle>Lista de Desejos</CardTitle>
                <CardDescription>Acomodações salvas para consulta futura</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="flex flex-col gap-3">
                      <div className="w-full h-40 bg-gray-200 rounded-md"></div>
                      <div>
                        <h3 className="font-semibold">Melbourne Central Apartments</h3>
                        <p className="text-sm text-gray-500">Melbourne, Austrália</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-semibold text-primary">A partir de €800/mês</span>
                          <Button variant="outline" size="sm">Ver detalhes</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex flex-col gap-3">
                      <div className="w-full h-40 bg-gray-200 rounded-md"></div>
                      <div>
                        <h3 className="font-semibold">London Student Housing</h3>
                        <p className="text-sm text-gray-500">Londres, Inglaterra</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-semibold text-primary">A partir de €950/mês</span>
                          <Button variant="outline" size="sm">Ver detalhes</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "referral" && (
            <Card>
              <CardHeader>
                <CardTitle>Indique e Ganhe</CardTitle>
                <CardDescription>Ganhe vouchers de desconto ao indicar amigos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <p className="text-sm mb-3">Compartilhe seu link de indicação com amigos e ganhe €50 em créditos para cada amigo que fizer uma reserva.</p>
                    
                    <div className="flex gap-2">
                      <Input readOnly value="https://acomodafacil.com/refer/user123" />
                      <Button variant="secondary" onClick={copyReferralLink}>
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Compartilhar via:</h3>
                    <div className="flex space-x-3">
                      <Button variant="outline">Email</Button>
                      <Button variant="outline">WhatsApp</Button>
                      <Button variant="outline">Facebook</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Amigos indicados (0)</h3>
                    <div className="bg-gray-50 p-4 rounded-md border text-center text-gray-500">
                      <p>Você ainda não tem nenhuma indicação.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "vouchers" && (
            <Card>
              <CardHeader>
                <CardTitle>Vouchers Disponíveis</CardTitle>
                <CardDescription>Seus cupons de desconto para utilizar em reservas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">WELCOME10</h3>
                        <p className="text-sm">10% de desconto na primeira reserva</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Válido até 31/12/2023</p>
                        <Button size="sm" className="mt-2">Usar agora</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">FRIEND50</h3>
                        <p className="text-sm">€50 de crédito por indicação</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Sem data de expiração</p>
                        <Button size="sm" className="mt-2">Usar agora</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Perfil</CardTitle>
                <CardDescription>Atualize suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-medium mb-1">Nome completo</label>
                      <Input defaultValue="João Silva" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input defaultValue="joao.silva@exemplo.com" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-medium mb-1">Telefone</label>
                      <Input defaultValue="+55 11 98765-4321" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-medium mb-1">País de origem</label>
                      <Input defaultValue="Brasil" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Idioma preferido</label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="bg-primary/10">Português</Button>
                      <Button variant="outline">Inglês</Button>
                      <Button variant="outline">Espanhol</Button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>Salvar alterações</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "documents" && (
            <Card>
              <CardHeader>
                <CardTitle>Meus Documentos</CardTitle>
                <CardDescription>Faça upload dos seus documentos para agilizar processos de reserva</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                          <Upload size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Documento de identidade (RG)</h3>
                          <p className="text-sm text-gray-500">Frente e verso do documento</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Upload</Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                          <Upload size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Passaporte</h3>
                          <p className="text-sm text-gray-500">Página de identificação</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Upload</Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                          <Upload size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Visto de estudante</h3>
                          <p className="text-sm text-gray-500">Documento de visto válido</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Upload</Button>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
