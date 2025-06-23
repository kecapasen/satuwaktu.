import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

export default function RangkaiPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">
            Rangkai
          </h1>
          <p className="italic text-stone-600">
            Karena beberapa waktu tak bisa kembali... tapi bisa dirangkai
            kembali di sini.
          </p>
        </div>
        <Tabs defaultValue="visual" className="w-full font-plusJakartaSans">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="visual">Fragmen Visual</TabsTrigger>
            <TabsTrigger value="quote">Petikan Kata</TabsTrigger>
            <TabsTrigger value="note">Alur Kenangan</TabsTrigger>
          </TabsList>

          {/* Fragmen Visual */}
          <TabsContent value="visual">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="file">Unggah Gambar/Video</Label>
                  <Input id="file" type="file" accept="image/*,video/*" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caption">Caption (Opsional)</Label>
                  <Textarea
                    id="caption"
                    placeholder="Tulis sesuatu tentang fragmen ini..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tanggal">Tanggal</Label>
                    <Input type="date" id="tanggal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jam">Jam</Label>
                    <Input type="time" id="jam" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lokasi">Lokasi</Label>
                    <Input
                      type="text"
                      id="lokasi"
                      placeholder="Contoh: Bandung, 2024"
                    />
                  </div>
                </div>

                <Separator className="bg-stone-200" />

                <div className="space-y-2">
                  <Label htmlFor="music">Pilih Lagu (URL/Spotify)</Label>
                  <Input id="music" type="text" placeholder="https://..." />
                </div>

                <div className="space-y-2">
                  <Label>Durasi Preview (Detik)</Label>
                  <Slider defaultValue={[15]} min={5} max={30} step={1} />
                </div>

                <Button className="w-full bg-stone-800 text-white hover:bg-stone-700">
                  Rangkai Fragmen Ini
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Petikan Kata */}
          <TabsContent value="quote">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="quote">Petikan Kata</Label>
                  <Textarea
                    id="quote"
                    rows={4}
                    placeholder="Tulis sesuatu yang pernah terasa..."
                  />
                </div>

                <Button className="w-full bg-stone-800 text-white hover:bg-stone-700">
                  Rangkai Petikan Ini
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Kenangan Teks */}
          <TabsContent value="note">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="note">Kenangan</Label>
                  <Textarea
                    id="note"
                    rows={6}
                    placeholder="Cerita yang tak sempat diabadikan..."
                  />
                </div>

                <Button className="w-full bg-stone-800 text-white hover:bg-stone-700">
                  Simpan Kenangan Ini
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
