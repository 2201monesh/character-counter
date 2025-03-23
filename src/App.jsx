import { useState } from 'react'
import './App.css'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import CountCards from './countCards';

function App() {

  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);
  const [charLimitValue, setCharLimitValue] = useState(0);
  const [text, setText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to calculate character count
  const getCharacterCount = () => {
    return text.replace(/\s/g, "").length;
  };

  // Function to calculate word count
  const getWordCount = () => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  // Function to calculate sentence count
  const getSentenceCount = () => {
    return text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  };


  return (
    <div className={`main-container`}>
      <div className="inner-container">
        <h2>Character Counter</h2>
        <div className="main-heading">
          <h1 className='text-5xl'>Analyze your text</h1>
          <h1 className='text-5xl'>in real-time.</h1>
        </div>
        <div className="textarea-container">
          <textarea className='textarea' placeholder='start typing here...' value={text} onChange={(e) => {
              if (!characterLimit || e.target.value.length <= charLimitValue) {
                setText(e.target.value);
              }
            }}></textarea>
        </div>

        <div className="flex flex-wrap gap-4 checkbox-container">
          {/* <label className="flex items-center gap-2 w-[20%] min-w-[150px]">
            <input className={`w-4 h-4 cursor-pointer`} type="checkbox" checked={excludeSpaces} onChange={() => setExcludeSpaces((prev) => !prev)} />
            <p className="text-sm">Exclude spaces</p>
          </label> */}

          <label className="flex items-center gap-2 w-[23%] min-w-[180px]">
            <input className={`w-4 h-4 cursor-pointer`} type="checkbox" checked={characterLimit} 
            onChange={(e) => {
                if (e.target.checked) {
                  setIsDialogOpen(true);
                } else {
                  setCharacterLimit(false);
                }
              }}  />
            <p className="text-sm">Set Character Limit</p>
          </label>

          {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className={`w-[500px] p-6 rounded-lg shadow-lg`}>
              <DialogHeader>
                <DialogTitle className={` p-32`}>Set Character Limit</DialogTitle>
              </DialogHeader>
              <Input 
                className='w-60  ml-6'
                type="number" 
                placeholder="Enter character limit..." 
                value={charLimitValue} 
                onChange={(e) => setCharLimitValue(Number(e.target.value))} 
              />
              <Button className={`cursor-pointer`} onClick={() => {
                setCharacterLimit(true);
                setIsDialogOpen(false);
              }}>Set Limit</Button>
            </DialogContent>
          </Dialog> */}

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogContent className="w-[500px] p-6 rounded-lg shadow-lg bg-transparent backdrop-blur-md">
    <DialogHeader>
      <DialogTitle className="p-32">Set Character Limit</DialogTitle>
    </DialogHeader>
    <Input 
      className="w-60 ml-6"
      type="number" 
      placeholder="Enter character limit..." 
      value={charLimitValue} 
      onChange={(e) => setCharLimitValue(Number(e.target.value))} 
    />
    <Button className="cursor-pointer" onClick={() => {
      setCharacterLimit(true);
      setIsDialogOpen(false);
    }}>Set Limit</Button>
  </DialogContent>
</Dialog>

        </div>

        <div className='flex'>
          <CountCards count={getCharacterCount()} text="Total Characters" bgColor="#D3A1FA" />
          <CountCards count={getWordCount()} text="Word Count" bgColor="#FF9F00" />
          <CountCards count={getSentenceCount()} text="Sentence Count" bgColor="#FF8159" />
        </div>


      </div>

    </div>
  )
}

export default App
